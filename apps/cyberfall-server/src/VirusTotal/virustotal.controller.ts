import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { VirusTotalService } from "./virustotal.service";
import { VirusTotalReport } from "../virusTotal/VirusTotalReport";

@swagger.ApiTags("virusTotals")
@common.Controller("virusTotals")
export class VirusTotalController {
  constructor(protected readonly service: VirusTotalService) {}

  @common.Get("/virustotal/file-report")
  @swagger.ApiOkResponse({
    type: VirusTotalReport
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetFileReport(
    @common.Body()
    body: string
  ): Promise<VirusTotalReport> {
        return this.service.GetFileReport(body);
      }

  @common.Get("/virustotal/url-report")
  @swagger.ApiOkResponse({
    type: VirusTotalReport
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetUrlReport(
    @common.Body()
    body: string
  ): Promise<VirusTotalReport> {
        return this.service.GetUrlReport(body);
      }

  @common.Post("/virustotal/scan-file")
  @swagger.ApiOkResponse({
    type: VirusTotalReport
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ScanFile(
    @common.Body()
    body: string
  ): Promise<VirusTotalReport> {
        return this.service.ScanFile(body);
      }

  @common.Post("/virustotal/scan-url")
  @swagger.ApiOkResponse({
    type: VirusTotalReport
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ScanUrl(
    @common.Body()
    body: string
  ): Promise<VirusTotalReport> {
        return this.service.ScanUrl(body);
      }
}
