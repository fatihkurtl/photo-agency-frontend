import { ApiServices } from "@/services/api";
import type { IGeneral, IOffer, ISeoData } from "@/interfaces/general";

export class GeneralHelper {
  private api: ApiServices;

  constructor(api: ApiServices) {
    this.api = api;
  }

  async getGeneralData(): Promise<IGeneral[]> {
    return this.api.get("/general", {
      "Content-Type": "application/json",
    });
  }

  async getOfferData(): Promise<IOffer[]> {
    return this.api.get("/general/offer", {
      "Content-Type": "application/json",
    });
  }

  async getSeoData(): Promise<ISeoData[]> {
    return this.api.get("/general/seo", {
      "Content-Type": "application/json",
    });
  }
}
