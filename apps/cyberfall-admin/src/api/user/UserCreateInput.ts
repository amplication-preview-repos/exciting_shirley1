import { InputJsonValue } from "../../types";
import { WebsiteCreateNestedManyWithoutUsersInput } from "./WebsiteCreateNestedManyWithoutUsersInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  websites?: WebsiteCreateNestedManyWithoutUsersInput;
  tenant?: TenantWhereUniqueInput | null;
};
