import { Website } from "../website/Website";
import { Tenant } from "../tenant/Tenant";

export type ScanReport = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  findings: string | null;
  status?: "Option1" | null;
  website?: Website | null;
  tenant?: Tenant | null;
};
