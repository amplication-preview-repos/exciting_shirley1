import * as graphql from "@nestjs/graphql";
import { ClamAvScanReport } from "../clamAv/ClamAvScanReport";
import { ClamAvService } from "./clamav.service";

export class ClamAvResolver {
  constructor(protected readonly service: ClamAvService) {}

  @graphql.Query(() => [ClamAvScanReport])
  async GetScanReports(
    @graphql.Args()
    args: string
  ): Promise<ClamAvScanReport[]> {
    return this.service.GetScanReports(args);
  }

  @graphql.Mutation(() => ClamAvScanReport)
  async ScanFile(
    @graphql.Args()
    args: string
  ): Promise<ClamAvScanReport> {
    return this.service.ScanFile(args);
  }
}
