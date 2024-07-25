import { Injectable } from "@nestjs/common";
import { CloudflareResponse } from "../cloudflare/CloudflareResponse";

@Injectable()
export class CloudflareService {
  constructor() {}
  async CheckDns(args: string): Promise<CloudflareResponse> {
    throw new Error("Not implemented");
  }
  async GetSecuritySettings(args: string): Promise<CloudflareResponse> {
    throw new Error("Not implemented");
  }
}
