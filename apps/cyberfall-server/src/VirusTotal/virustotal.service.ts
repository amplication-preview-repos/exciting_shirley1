import { Injectable } from "@nestjs/common";
import { VirusTotalReport } from "../virusTotal/VirusTotalReport";

@Injectable()
export class VirusTotalService {
  constructor() {}
  async GetFileReport(args: string): Promise<VirusTotalReport> {
    throw new Error("Not implemented");
  }
  async GetUrlReport(args: string): Promise<VirusTotalReport> {
    throw new Error("Not implemented");
  }
  async ScanFile(args: string): Promise<VirusTotalReport> {
    throw new Error("Not implemented");
  }
  async ScanUrl(args: string): Promise<VirusTotalReport> {
    throw new Error("Not implemented");
  }
}
