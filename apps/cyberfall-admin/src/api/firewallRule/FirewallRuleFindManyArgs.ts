import { FirewallRuleWhereInput } from "./FirewallRuleWhereInput";
import { FirewallRuleOrderByInput } from "./FirewallRuleOrderByInput";

export type FirewallRuleFindManyArgs = {
  where?: FirewallRuleWhereInput;
  orderBy?: Array<FirewallRuleOrderByInput>;
  skip?: number;
  take?: number;
};
