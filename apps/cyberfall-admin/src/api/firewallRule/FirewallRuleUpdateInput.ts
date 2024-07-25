import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type FirewallRuleUpdateInput = {
  ruleName?: string | null;
  ruleDetails?: string | null;
  website?: WebsiteWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
