import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type FirewallRuleCreateInput = {
  ruleName?: string | null;
  ruleDetails?: string | null;
  website?: WebsiteWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
