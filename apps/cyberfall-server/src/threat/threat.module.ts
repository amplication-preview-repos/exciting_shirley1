import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ThreatModuleBase } from "./base/threat.module.base";
import { ThreatService } from "./threat.service";
import { ThreatController } from "./threat.controller";
import { ThreatResolver } from "./threat.resolver";

@Module({
  imports: [ThreatModuleBase, forwardRef(() => AuthModule)],
  controllers: [ThreatController],
  providers: [ThreatService, ThreatResolver],
  exports: [ThreatService],
})
export class ThreatModule {}
