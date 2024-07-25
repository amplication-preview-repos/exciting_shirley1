import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ScanReportWhereInput = {
  id?: StringFilter;
  findings?: StringNullableFilter;
  status?: "Option1";
  website?: WebsiteWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
};
