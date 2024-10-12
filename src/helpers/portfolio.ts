import { ApiServices } from "@/services/api";

export default class PortfolioHelper {
  private api: ApiServices;
  
  constructor(api: ApiServices) {
    this.api = api;
  }
}
