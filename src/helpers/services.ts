import { ApiServices } from "@/services/api";
import type { ICategory, IService } from "@/interfaces/services";

export class ServicesHelper {
  private api: ApiServices;

  constructor(api: ApiServices) {
    this.api = api;
  }

  async getPackageCategories(): Promise<ICategory[]> {
    return this.api.get("/services/packages/categories", {
      "Content-Type": "application/json",
    });
  }

  async getServicePackages(): Promise<IService[]> {
    return this.api.get("/services/packages", {
      "Content-Type": "application/json",
    });
  }
}
