/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TenantService } from "../tenant.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TenantCreateInput } from "./TenantCreateInput";
import { Tenant } from "./Tenant";
import { TenantFindManyArgs } from "./TenantFindManyArgs";
import { TenantWhereUniqueInput } from "./TenantWhereUniqueInput";
import { TenantUpdateInput } from "./TenantUpdateInput";
import { WebsiteFindManyArgs } from "../../website/base/WebsiteFindManyArgs";
import { Website } from "../../website/base/Website";
import { WebsiteWhereUniqueInput } from "../../website/base/WebsiteWhereUniqueInput";
import { ScanReportFindManyArgs } from "../../scanReport/base/ScanReportFindManyArgs";
import { ScanReport } from "../../scanReport/base/ScanReport";
import { ScanReportWhereUniqueInput } from "../../scanReport/base/ScanReportWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ThreatFindManyArgs } from "../../threat/base/ThreatFindManyArgs";
import { Threat } from "../../threat/base/Threat";
import { ThreatWhereUniqueInput } from "../../threat/base/ThreatWhereUniqueInput";
import { FirewallRuleFindManyArgs } from "../../firewallRule/base/FirewallRuleFindManyArgs";
import { FirewallRule } from "../../firewallRule/base/FirewallRule";
import { FirewallRuleWhereUniqueInput } from "../../firewallRule/base/FirewallRuleWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TenantControllerBase {
  constructor(
    protected readonly service: TenantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Tenant })
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTenant(@common.Body() data: TenantCreateInput): Promise<Tenant> {
    return await this.service.createTenant({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Tenant] })
  @ApiNestedQuery(TenantFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async tenants(@common.Req() request: Request): Promise<Tenant[]> {
    const args = plainToClass(TenantFindManyArgs, request.query);
    return this.service.tenants({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Tenant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async tenant(
    @common.Param() params: TenantWhereUniqueInput
  ): Promise<Tenant | null> {
    const result = await this.service.tenant({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Tenant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTenant(
    @common.Param() params: TenantWhereUniqueInput,
    @common.Body() data: TenantUpdateInput
  ): Promise<Tenant | null> {
    try {
      return await this.service.updateTenant({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Tenant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTenant(
    @common.Param() params: TenantWhereUniqueInput
  ): Promise<Tenant | null> {
    try {
      return await this.service.deleteTenant({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/websites")
  @ApiNestedQuery(WebsiteFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Website",
    action: "read",
    possession: "any",
  })
  async findWebsites(
    @common.Req() request: Request,
    @common.Param() params: TenantWhereUniqueInput
  ): Promise<Website[]> {
    const query = plainToClass(WebsiteFindManyArgs, request.query);
    const results = await this.service.findWebsites(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/websites")
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  async connectWebsites(
    @common.Param() params: TenantWhereUniqueInput,
    @common.Body() body: WebsiteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      websites: {
        connect: body,
      },
    };
    await this.service.updateTenant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/websites")
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  async updateWebsites(
    @common.Param() params: TenantWhereUniqueInput,
    @common.Body() body: WebsiteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      websites: {
        set: body,
      },
    };
    await this.service.updateTenant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/websites")
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  async disconnectWebsites(
    @common.Param() params: TenantWhereUniqueInput,
    @common.Body() body: WebsiteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      websites: {
        disconnect: body,
      },
    };
    await this.service.updateTenant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/scanReports")
  @ApiNestedQuery(ScanReportFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ScanReport",
    action: "read",
    possession: "any",
  })
  async findScanReports(
    @common.Req() request: Request,
    @common.Param() params: TenantWhereUniqueInput
  ): Promise<ScanReport[]> {
    const query = plainToClass(ScanReportFindManyArgs, request.query);
    const results = await this.service.findScanReports(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        findings: true,
        status: true,

        website: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/scanReports")
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  async connectScanReports(
    @common.Param() params: TenantWhereUniqueInput,
    @common.Body() body: ScanReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scanReports: {
        connect: body,
      },
    };
    await this.service.updateTenant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/scanReports")
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  async updateScanReports(
    @common.Param() params: TenantWhereUniqueInput,
    @common.Body() body: ScanReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scanReports: {
        set: body,
      },
    };
    await this.service.updateTenant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/scanReports")
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  async disconnectScanReports(
    @common.Param() params: TenantWhereUniqueInput,
    @common.Body() body: ScanReportWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      scanReports: {
        disconnect: body,
      },
    };
    await this.service.updateTenant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUsers(
    @common.Req() request: Request,
    @common.Param() params: TenantWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        roles: true,

        tenant: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  async connectUsers(
    @common.Param() params: TenantWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.updateTenant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  async updateUsers(
    @common.Param() params: TenantWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.updateTenant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  async disconnectUsers(
    @common.Param() params: TenantWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.updateTenant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/threats")
  @ApiNestedQuery(ThreatFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Threat",
    action: "read",
    possession: "any",
  })
  async findThreats(
    @common.Req() request: Request,
    @common.Param() params: TenantWhereUniqueInput
  ): Promise<Threat[]> {
    const query = plainToClass(ThreatFindManyArgs, request.query);
    const results = await this.service.findThreats(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        level: true,
        mitigated: true,

        website: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/threats")
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  async connectThreats(
    @common.Param() params: TenantWhereUniqueInput,
    @common.Body() body: ThreatWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      threats: {
        connect: body,
      },
    };
    await this.service.updateTenant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/threats")
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  async updateThreats(
    @common.Param() params: TenantWhereUniqueInput,
    @common.Body() body: ThreatWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      threats: {
        set: body,
      },
    };
    await this.service.updateTenant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/threats")
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  async disconnectThreats(
    @common.Param() params: TenantWhereUniqueInput,
    @common.Body() body: ThreatWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      threats: {
        disconnect: body,
      },
    };
    await this.service.updateTenant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/firewallRules")
  @ApiNestedQuery(FirewallRuleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FirewallRule",
    action: "read",
    possession: "any",
  })
  async findFirewallRules(
    @common.Req() request: Request,
    @common.Param() params: TenantWhereUniqueInput
  ): Promise<FirewallRule[]> {
    const query = plainToClass(FirewallRuleFindManyArgs, request.query);
    const results = await this.service.findFirewallRules(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        ruleName: true,
        ruleDetails: true,

        website: {
          select: {
            id: true,
          },
        },

        tenant: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/firewallRules")
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  async connectFirewallRules(
    @common.Param() params: TenantWhereUniqueInput,
    @common.Body() body: FirewallRuleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      firewallRules: {
        connect: body,
      },
    };
    await this.service.updateTenant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/firewallRules")
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  async updateFirewallRules(
    @common.Param() params: TenantWhereUniqueInput,
    @common.Body() body: FirewallRuleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      firewallRules: {
        set: body,
      },
    };
    await this.service.updateTenant({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/firewallRules")
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  async disconnectFirewallRules(
    @common.Param() params: TenantWhereUniqueInput,
    @common.Body() body: FirewallRuleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      firewallRules: {
        disconnect: body,
      },
    };
    await this.service.updateTenant({
      where: params,
      data,
      select: { id: true },
    });
  }
}
