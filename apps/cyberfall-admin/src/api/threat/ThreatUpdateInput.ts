import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ThreatUpdateInput = {
  description?: string | null;
  level?: "Option1" | null;
  mitigated?: boolean | null;
  website?: WebsiteWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
