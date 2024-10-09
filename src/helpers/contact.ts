import type { IContact } from "@/interfaces/contact";
import { ApiServices } from "@/services/api";

export class ContactHelper {
  private api: ApiServices;

  constructor(api: ApiServices) {
    this.api = api;
  }

  async sendContactData(contactData: IContact) {
    return this.api.post("/contact", contactData, {
      "Content-Type": "application/json",
    });
  }

  async getContactInformation() {
    return this.api.get("/contact", {
      "Content-Type": "application/json",
    });
  }
}
