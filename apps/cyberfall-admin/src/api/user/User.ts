import { JsonValue } from "type-fest";
import { Website } from "../website/Website";
import { Tenant } from "../tenant/Tenant";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  websites?: Array<Website>;
  tenant?: Tenant | null;
};
