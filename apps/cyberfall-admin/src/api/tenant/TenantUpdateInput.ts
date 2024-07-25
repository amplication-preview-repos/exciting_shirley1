import { WebsiteUpdateManyWithoutTenantsInput } from "./WebsiteUpdateManyWithoutTenantsInput";
import { ScanReportUpdateManyWithoutTenantsInput } from "./ScanReportUpdateManyWithoutTenantsInput";
import { UserUpdateManyWithoutTenantsInput } from "./UserUpdateManyWithoutTenantsInput";
import { ThreatUpdateManyWithoutTenantsInput } from "./ThreatUpdateManyWithoutTenantsInput";
import { FirewallRuleUpdateManyWithoutTenantsInput } from "./FirewallRuleUpdateManyWithoutTenantsInput";

export type TenantUpdateInput = {
  name?: string | null;
  websites?: WebsiteUpdateManyWithoutTenantsInput;
  scanReports?: ScanReportUpdateManyWithoutTenantsInput;
  users?: UserUpdateManyWithoutTenantsInput;
  threats?: ThreatUpdateManyWithoutTenantsInput;
  firewallRules?: FirewallRuleUpdateManyWithoutTenantsInput;
};
