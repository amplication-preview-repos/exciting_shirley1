import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WebsiteModuleBase } from "./base/website.module.base";
import { WebsiteService } from "./website.service";
import { WebsiteController } from "./website.controller";
import { WebsiteResolver } from "./website.resolver";

@Module({
  imports: [WebsiteModuleBase, forwardRef(() => AuthModule)],
  controllers: [WebsiteController],
  providers: [WebsiteService, WebsiteResolver],
  exports: [WebsiteService],
})
export class WebsiteModule {}
