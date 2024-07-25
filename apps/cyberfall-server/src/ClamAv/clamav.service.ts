import { Injectable } from "@nestjs/common";
import { ClamAvScanReport } from "../clamAv/ClamAvScanReport";

@Injectable()
export class ClamAvService {
  constructor() {}
  async GetScanReports(args: string): Promise<ClamAvScanReport[]> {
    throw new Error("Not implemented");
  }
  async ScanFile(args: string): Promise<ClamAvScanReport> {
    throw new Error("Not implemented");
  }
}
