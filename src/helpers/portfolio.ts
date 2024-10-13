import { ApiServices } from "@/services/api";
import type { ICategory, IProjects } from "@/interfaces/portfolio";

export default class PortfolioHelper {
  private api: ApiServices;

  constructor(api: ApiServices) {
    this.api = api;
  }

  async getCategories(): Promise<ICategory[]> {
    return this.api.get("/portfolio/projects/categories", {
      "Content-Type": "application/json",
    });
  }

  async getProjects(): Promise<IProjects[]> {
    return this.api.get(`/portfolio/projects`, {
      "Content-Type": "application/json",
    });
  }
}
