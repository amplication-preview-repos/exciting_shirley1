import { SortOrder } from "../../util/SortOrder";

export type FirewallRuleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  ruleName?: SortOrder;
  ruleDetails?: SortOrder;
  websiteId?: SortOrder;
  tenantId?: SortOrder;
};
