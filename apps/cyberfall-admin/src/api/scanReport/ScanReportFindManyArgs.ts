import { ScanReportWhereInput } from "./ScanReportWhereInput";
import { ScanReportOrderByInput } from "./ScanReportOrderByInput";

export type ScanReportFindManyArgs = {
  where?: ScanReportWhereInput;
  orderBy?: Array<ScanReportOrderByInput>;
  skip?: number;
  take?: number;
};
