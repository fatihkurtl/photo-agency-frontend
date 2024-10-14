import { ApiServices } from "@/services/api";
import type { IHeroSection, IServiceSection } from "@/interfaces/home";

export class HomeHelper {
  private api: ApiServices;

  constructor(api: ApiServices) {
    this.api = api;
  }

  async getHeroSection(): Promise<IHeroSection[]> {
    return this.api.get("/home/hero_section", {
      "Content-Type": "application/json",
    });
  }
}
