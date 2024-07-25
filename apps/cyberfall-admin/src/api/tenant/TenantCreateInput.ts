import { WebsiteCreateNestedManyWithoutTenantsInput } from "./WebsiteCreateNestedManyWithoutTenantsInput";
import { ScanReportCreateNestedManyWithoutTenantsInput } from "./ScanReportCreateNestedManyWithoutTenantsInput";
import { UserCreateNestedManyWithoutTenantsInput } from "./UserCreateNestedManyWithoutTenantsInput";
import { ThreatCreateNestedManyWithoutTenantsInput } from "./ThreatCreateNestedManyWithoutTenantsInput";
import { FirewallRuleCreateNestedManyWithoutTenantsInput } from "./FirewallRuleCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  name?: string | null;
  websites?: WebsiteCreateNestedManyWithoutTenantsInput;
  scanReports?: ScanReportCreateNestedManyWithoutTenantsInput;
  users?: UserCreateNestedManyWithoutTenantsInput;
  threats?: ThreatCreateNestedManyWithoutTenantsInput;
  firewallRules?: FirewallRuleCreateNestedManyWithoutTenantsInput;
};
