import { ApiServices } from "@/services/api";
import type {
  IAboutUsContent,
  IOurApproach,
  IBusinessCard,
  ISkillsExperience,
  IAchievements,
} from "@/interfaces/about";

export class AboutHelper {
  private api: ApiServices;

  constructor(api: ApiServices) {
    this.api = api;
  }

  async getAboutContent(): Promise<IAboutUsContent[]> {
    return this.api.get("/about/content", {
      "Content-Type": "application/json",
    });
  }

  async getOurApproach(): Promise<IOurApproach[]> {
    return this.api.get("/about/our_approach", {
      "Content-Type": "application/json",
    });
  }

  async getBusinessCards(): Promise<IBusinessCard[]> {
    return this.api.get("/about/business_card", {
      "Content-Type": "application/json",
    });
  }

  async getSkillsExperience(): Promise<ISkillsExperience[]> {
    return this.api.get("/about/skils_and_experience", {
      "Content-Type": "application/json",
    });
  }

  async getAchievements(): Promise<IAchievements[]> {
    return this.api.get("/about/achievements", {
      "Content-Type": "application/json",
    });
  }
}
