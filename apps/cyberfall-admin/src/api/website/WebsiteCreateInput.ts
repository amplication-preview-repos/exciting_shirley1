import { ScanReportCreateNestedManyWithoutWebsitesInput } from "./ScanReportCreateNestedManyWithoutWebsitesInput";
import { ThreatCreateNestedManyWithoutWebsitesInput } from "./ThreatCreateNestedManyWithoutWebsitesInput";
import { FirewallRuleCreateNestedManyWithoutWebsitesInput } from "./FirewallRuleCreateNestedManyWithoutWebsitesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type WebsiteCreateInput = {
  name?: string | null;
  url?: string | null;
  scanReports?: ScanReportCreateNestedManyWithoutWebsitesInput;
  threats?: ThreatCreateNestedManyWithoutWebsitesInput;
  firewallRules?: FirewallRuleCreateNestedManyWithoutWebsitesInput;
  user?: UserWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
