import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FirewallRuleService } from "./firewallRule.service";
import { FirewallRuleControllerBase } from "./base/firewallRule.controller.base";

@swagger.ApiTags("firewallRules")
@common.Controller("firewallRules")
export class FirewallRuleController extends FirewallRuleControllerBase {
  constructor(
    protected readonly service: FirewallRuleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
