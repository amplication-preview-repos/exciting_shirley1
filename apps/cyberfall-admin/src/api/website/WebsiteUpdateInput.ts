import { ScanReportUpdateManyWithoutWebsitesInput } from "./ScanReportUpdateManyWithoutWebsitesInput";
import { ThreatUpdateManyWithoutWebsitesInput } from "./ThreatUpdateManyWithoutWebsitesInput";
import { FirewallRuleUpdateManyWithoutWebsitesInput } from "./FirewallRuleUpdateManyWithoutWebsitesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type WebsiteUpdateInput = {
  name?: string | null;
  url?: string | null;
  scanReports?: ScanReportUpdateManyWithoutWebsitesInput;
  threats?: ThreatUpdateManyWithoutWebsitesInput;
  firewallRules?: FirewallRuleUpdateManyWithoutWebsitesInput;
  user?: UserWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
