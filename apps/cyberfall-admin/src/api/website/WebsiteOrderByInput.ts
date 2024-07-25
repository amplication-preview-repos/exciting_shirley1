import { SortOrder } from "../../util/SortOrder";

export type WebsiteOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  url?: SortOrder;
  userId?: SortOrder;
  tenantId?: SortOrder;
};
