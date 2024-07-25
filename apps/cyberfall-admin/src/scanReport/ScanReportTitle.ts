import { ScanReport as TScanReport } from "../api/scanReport/ScanReport";

export const SCANREPORT_TITLE_FIELD = "id";

export const ScanReportTitle = (record: TScanReport): string => {
  return record.id?.toString() || String(record.id);
};
