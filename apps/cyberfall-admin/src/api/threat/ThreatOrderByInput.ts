import { SortOrder } from "../../util/SortOrder";

export type ThreatOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  level?: SortOrder;
  mitigated?: SortOrder;
  websiteId?: SortOrder;
  tenantId?: SortOrder;
};
