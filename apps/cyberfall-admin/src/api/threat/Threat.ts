import { Website } from "../website/Website";
import { Tenant } from "../tenant/Tenant";

export type Threat = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  level?: "Option1" | null;
  mitigated: boolean | null;
  website?: Website | null;
  tenant?: Tenant | null;
};
