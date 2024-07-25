import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ThreatCreateInput = {
  description?: string | null;
  level?: "Option1" | null;
  mitigated?: boolean | null;
  website?: WebsiteWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
