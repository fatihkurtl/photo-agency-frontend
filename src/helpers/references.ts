import { ApiServices } from "@/services/api";
import type {
  IClientTestimonials,
  ICustomerPortfolio,
  IFeaturedProjects,
  ISectoralRecognition,
} from "@/interfaces/references";

export class ReferencesHelper {
  private api: ApiServices;

  constructor(api: ApiServices) {
    this.api = api;
  }

  async getCustomerPortfolio(): Promise<ICustomerPortfolio[]> {
    return this.api.get("/references/customer_portfolio", {
      "Content-Type": "application/json",
    });
  }

  async getClientTestimonials(): Promise<IClientTestimonials[]> {
    return this.api.get("/references/customer_testimonials", {
      "Content-Type": "application/json",
    });
  }

  async getFeaturedProjects(): Promise<IFeaturedProjects[]> {
    return this.api.get("/references/featured_projects", {
      "Content-Type": "application/json",
    });
  }

  async getIndustryRecognition(): Promise<ISectoralRecognition[]> {
    return this.api.get("/references/sectoral_recognition", {
      "Content-Type": "application/json",
    });
  }
}
