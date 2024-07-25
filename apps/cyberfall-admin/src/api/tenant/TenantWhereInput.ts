import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WebsiteListRelationFilter } from "../website/WebsiteListRelationFilter";
import { ScanReportListRelationFilter } from "../scanReport/ScanReportListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { ThreatListRelationFilter } from "../threat/ThreatListRelationFilter";
import { FirewallRuleListRelationFilter } from "../firewallRule/FirewallRuleListRelationFilter";

export type TenantWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  websites?: WebsiteListRelationFilter;
  scanReports?: ScanReportListRelationFilter;
  users?: UserListRelationFilter;
  threats?: ThreatListRelationFilter;
  firewallRules?: FirewallRuleListRelationFilter;
};
