import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WebsiteService } from "./website.service";
import { WebsiteControllerBase } from "./base/website.controller.base";

@swagger.ApiTags("websites")
@common.Controller("websites")
export class WebsiteController extends WebsiteControllerBase {
  constructor(
    protected readonly service: WebsiteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
