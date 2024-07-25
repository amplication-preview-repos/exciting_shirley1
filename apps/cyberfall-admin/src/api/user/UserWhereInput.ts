import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WebsiteListRelationFilter } from "../website/WebsiteListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  websites?: WebsiteListRelationFilter;
  tenant?: TenantWhereUniqueInput;
};
