import { ApiServices } from "@/services/api";
import type { IContent, ICategory, IService } from "@/interfaces/services";

export class ServicesHelper {
  private api: ApiServices;

  constructor(api: ApiServices) {
    this.api = api;
  }

  async getServiceContent(): Promise<IContent[]> {
    return this.api.get("/services/content", {
      "Content-Type": "application/json",
    });
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

  async getWhyChooseOurServices(): Promise<IService[]> {
    return this.api.get("/services/why_choose_our_services", {
      "Content-Type": "application/json",
    });
  }
}
