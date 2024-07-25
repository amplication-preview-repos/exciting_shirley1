import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScanReportService } from "./scanReport.service";
import { ScanReportControllerBase } from "./base/scanReport.controller.base";

@swagger.ApiTags("scanReports")
@common.Controller("scanReports")
export class ScanReportController extends ScanReportControllerBase {
  constructor(
    protected readonly service: ScanReportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
