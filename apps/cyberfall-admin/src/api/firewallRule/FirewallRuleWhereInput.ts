import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type FirewallRuleWhereInput = {
  id?: StringFilter;
  ruleName?: StringNullableFilter;
  ruleDetails?: StringNullableFilter;
  website?: WebsiteWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
};
