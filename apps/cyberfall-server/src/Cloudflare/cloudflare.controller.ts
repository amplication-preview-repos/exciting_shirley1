import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CloudflareService } from "./cloudflare.service";
import { CloudflareResponse } from "../cloudflare/CloudflareResponse";

@swagger.ApiTags("cloudflares")
@common.Controller("cloudflares")
export class CloudflareController {
  constructor(protected readonly service: CloudflareService) {}

  @common.Get("/cloudflare/check-dns")
  @swagger.ApiOkResponse({
    type: CloudflareResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CheckDns(
    @common.Body()
    body: string
  ): Promise<CloudflareResponse> {
        return this.service.CheckDns(body);
      }

  @common.Get("/cloudflare/security-settings")
  @swagger.ApiOkResponse({
    type: CloudflareResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetSecuritySettings(
    @common.Body()
    body: string
  ): Promise<CloudflareResponse> {
        return this.service.GetSecuritySettings(body);
      }
}
