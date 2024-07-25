import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ScanReportUpdateInput = {
  findings?: string | null;
  status?: "Option1" | null;
  website?: WebsiteWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
