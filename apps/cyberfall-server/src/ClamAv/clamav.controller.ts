import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ClamAvService } from "./clamav.service";
import { ClamAvScanReport } from "../clamAv/ClamAvScanReport";

@swagger.ApiTags("clamAvs")
@common.Controller("clamAvs")
export class ClamAvController {
  constructor(protected readonly service: ClamAvService) {}

  @common.Get("/clamav/reports")
  @swagger.ApiOkResponse({
    type: ClamAvScanReport
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetScanReports(
    @common.Body()
    body: string
  ): Promise<ClamAvScanReport[]> {
        return this.service.GetScanReports(body);
      }

  @common.Post("/clamav/scan-file")
  @swagger.ApiOkResponse({
    type: ClamAvScanReport
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
  ): Promise<ClamAvScanReport> {
        return this.service.ScanFile(body);
      }
}
