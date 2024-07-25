import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ThreatWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  level?: "Option1";
  mitigated?: BooleanNullableFilter;
  website?: WebsiteWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
};
