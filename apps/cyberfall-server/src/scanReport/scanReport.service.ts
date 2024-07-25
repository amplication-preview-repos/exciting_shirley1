import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScanReportServiceBase } from "./base/scanReport.service.base";

@Injectable()
export class ScanReportService extends ScanReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
