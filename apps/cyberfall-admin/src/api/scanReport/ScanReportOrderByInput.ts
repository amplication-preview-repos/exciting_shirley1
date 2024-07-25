import { SortOrder } from "../../util/SortOrder";

export type ScanReportOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  findings?: SortOrder;
  status?: SortOrder;
  websiteId?: SortOrder;
  tenantId?: SortOrder;
};
