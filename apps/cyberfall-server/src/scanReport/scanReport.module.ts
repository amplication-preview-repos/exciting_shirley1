import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScanReportModuleBase } from "./base/scanReport.module.base";
import { ScanReportService } from "./scanReport.service";
import { ScanReportController } from "./scanReport.controller";
import { ScanReportResolver } from "./scanReport.resolver";

@Module({
  imports: [ScanReportModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScanReportController],
  providers: [ScanReportService, ScanReportResolver],
  exports: [ScanReportService],
})
export class ScanReportModule {}
