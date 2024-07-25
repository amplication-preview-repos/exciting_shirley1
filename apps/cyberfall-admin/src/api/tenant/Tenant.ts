import { Website } from "../website/Website";
import { ScanReport } from "../scanReport/ScanReport";
import { User } from "../user/User";
import { Threat } from "../threat/Threat";
import { FirewallRule } from "../firewallRule/FirewallRule";

export type Tenant = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  websites?: Array<Website>;
  scanReports?: Array<ScanReport>;
  users?: Array<User>;
  threats?: Array<Threat>;
  firewallRules?: Array<FirewallRule>;
};
