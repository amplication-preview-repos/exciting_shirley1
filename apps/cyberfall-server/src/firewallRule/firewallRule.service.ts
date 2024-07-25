import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FirewallRuleServiceBase } from "./base/firewallRule.service.base";

@Injectable()
export class FirewallRuleService extends FirewallRuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
