import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ScanReportListRelationFilter } from "../scanReport/ScanReportListRelationFilter";
import { ThreatListRelationFilter } from "../threat/ThreatListRelationFilter";
import { FirewallRuleListRelationFilter } from "../firewallRule/FirewallRuleListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type WebsiteWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
  scanReports?: ScanReportListRelationFilter;
  threats?: ThreatListRelationFilter;
  firewallRules?: FirewallRuleListRelationFilter;
  user?: UserWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
};
