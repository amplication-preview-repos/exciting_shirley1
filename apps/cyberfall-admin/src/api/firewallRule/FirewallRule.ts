import { Website } from "../website/Website";
import { Tenant } from "../tenant/Tenant";

export type FirewallRule = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  ruleName: string | null;
  ruleDetails: string | null;
  website?: Website | null;
  tenant?: Tenant | null;
};
