import * as graphql from "@nestjs/graphql";
import { CloudflareResponse } from "../cloudflare/CloudflareResponse";
import { CloudflareService } from "./cloudflare.service";

export class CloudflareResolver {
  constructor(protected readonly service: CloudflareService) {}

  @graphql.Query(() => CloudflareResponse)
  async CheckDns(
    @graphql.Args()
    args: string
  ): Promise<CloudflareResponse> {
    return this.service.CheckDns(args);
  }

  @graphql.Query(() => CloudflareResponse)
  async GetSecuritySettings(
    @graphql.Args()
    args: string
  ): Promise<CloudflareResponse> {
    return this.service.GetSecuritySettings(args);
  }
}
