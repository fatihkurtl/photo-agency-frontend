import { ApiServices } from "@/services/api";
import type {
  IContact,
  IContactApiResponse,
  IContactInformation,
  ISocialMediaAccounts,
  IWhyChooseUs,
} from "@/interfaces/contact";

export class ContactHelper {
  private api: ApiServices;

  constructor(api: ApiServices) {
    this.api = api;
  }

  async sendContactForm(contactData: IContact): Promise<IContactApiResponse> {
    return this.api.post("/contact/us/", contactData, {
      "Content-Type": "application/json",
    });
  }

  async getContactInformation(): Promise<IContactInformation[]> {
    return this.api.get("/contact/information", {
      "Content-Type": "application/json",
    });
  }

  async getSocialMediaAccounts(): Promise<ISocialMediaAccounts[]> {
    return this.api.get("/contact/social_media_accounts", {
      "Content-Type": "application/json",
    });
  }
  async getWhyChooseUs(): Promise<IWhyChooseUs[]> {
    return this.api.get("/contact/why_choose_us", {
      "Content-Type": "application/json",
    });
  }

  async getFaq(): Promise<IWhyChooseUs[]> {
    return this.api.get("/contact/faq", {
      "Content-Type": "application/json",
    });
  }
}
