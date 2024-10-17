type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions {
  method: HttpMethod;
  headers?: Record<string, string>;
  body?: any;
  cache?: RequestCache;
}

export class ApiServices {
  private baseUrl: string;

  constructor(baseUrl: string) {
    if (!baseUrl) {
      console.error('Base API URL is not defined');
      throw new Error('Base API URL is required');
    }
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestOptions
  ): Promise<T> {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    
    url.searchParams.append('_t', Date.now().toString());

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    let body: string | FormData | undefined = options.body;

    if (body instanceof FormData) {
      delete headers["Content-Type"];
    } else if (typeof body === "object") {
      body = JSON.stringify(body);
    }

    const config: RequestInit = {
      method: options.method,
      headers,
      body,
      cache: options.cache || 'no-store',
    };

    try {
      const response = await fetch(url.toString(), config);
      const responseData = await response.text();

      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status}, body: ${responseData}`
        );
      }

      return responseData ? JSON.parse(responseData) : {};
    } catch (error) {
      console.error("Request error:", error);
      throw error;
    }
  }

  public async get<T>(endpoint: string, headers?: Record<string, string>, cache?: RequestCache): Promise<T> {
    return this.request<T>(endpoint, { method: "GET", headers, cache });
  }

  public async post<T>(endpoint: string, body: any, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, { method: "POST", body, headers });
  }

  public async put<T>(endpoint: string, body: any, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, { method: "PUT", body, headers });
  }

  public async patch<T>(endpoint: string, body: any, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, { method: "PATCH", body, headers });
  }

  public async delete<T>(endpoint: string, body?: any, headers?: Record<string, string>): Promise<T> {
    return this.request<T>(endpoint, { method: "DELETE", body, headers });
  }
}

const api = new ApiServices(process.env.NEXT_PUBLIC_BASE_API_URL as string);
export default api;