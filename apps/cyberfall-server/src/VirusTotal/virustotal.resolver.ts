import * as graphql from "@nestjs/graphql";
import { VirusTotalReport } from "../virusTotal/VirusTotalReport";
import { VirusTotalService } from "./virustotal.service";

export class VirusTotalResolver {
  constructor(protected readonly service: VirusTotalService) {}

  @graphql.Query(() => VirusTotalReport)
  async GetFileReport(
    @graphql.Args()
    args: string
  ): Promise<VirusTotalReport> {
    return this.service.GetFileReport(args);
  }

  @graphql.Query(() => VirusTotalReport)
  async GetUrlReport(
    @graphql.Args()
    args: string
  ): Promise<VirusTotalReport> {
    return this.service.GetUrlReport(args);
  }

  @graphql.Mutation(() => VirusTotalReport)
  async ScanFile(
    @graphql.Args()
    args: string
  ): Promise<VirusTotalReport> {
    return this.service.ScanFile(args);
  }

  @graphql.Mutation(() => VirusTotalReport)
  async ScanUrl(
    @graphql.Args()
    args: string
  ): Promise<VirusTotalReport> {
    return this.service.ScanUrl(args);
  }
}
