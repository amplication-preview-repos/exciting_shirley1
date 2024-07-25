import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FirewallRuleModuleBase } from "./base/firewallRule.module.base";
import { FirewallRuleService } from "./firewallRule.service";
import { FirewallRuleController } from "./firewallRule.controller";
import { FirewallRuleResolver } from "./firewallRule.resolver";

@Module({
  imports: [FirewallRuleModuleBase, forwardRef(() => AuthModule)],
  controllers: [FirewallRuleController],
  providers: [FirewallRuleService, FirewallRuleResolver],
  exports: [FirewallRuleService],
})
export class FirewallRuleModule {}
