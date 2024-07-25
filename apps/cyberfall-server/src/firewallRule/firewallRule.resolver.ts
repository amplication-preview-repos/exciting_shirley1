import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FirewallRuleResolverBase } from "./base/firewallRule.resolver.base";
import { FirewallRule } from "./base/FirewallRule";
import { FirewallRuleService } from "./firewallRule.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FirewallRule)
export class FirewallRuleResolver extends FirewallRuleResolverBase {
  constructor(
    protected readonly service: FirewallRuleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
