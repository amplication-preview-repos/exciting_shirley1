import { FirewallRule as TFirewallRule } from "../api/firewallRule/FirewallRule";

export const FIREWALLRULE_TITLE_FIELD = "ruleName";

export const FirewallRuleTitle = (record: TFirewallRule): string => {
  return record.ruleName?.toString() || String(record.id);
};
