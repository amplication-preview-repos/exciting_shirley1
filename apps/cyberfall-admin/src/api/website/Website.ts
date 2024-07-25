import { ScanReport } from "../scanReport/ScanReport";
import { Threat } from "../threat/Threat";
import { FirewallRule } from "../firewallRule/FirewallRule";
import { User } from "../user/User";
import { Tenant } from "../tenant/Tenant";

export type Website = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  url: string | null;
  scanReports?: Array<ScanReport>;
  threats?: Array<Threat>;
  firewallRules?: Array<FirewallRule>;
  user?: User | null;
  tenant?: Tenant | null;
};
