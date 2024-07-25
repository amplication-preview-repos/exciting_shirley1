import { Module } from "@nestjs/common";
import { ClamAvService } from "./clamav.service";
import { ClamAvController } from "./clamav.controller";
import { ClamAvResolver } from "./clamav.resolver";

@Module({
  controllers: [ClamAvController],
  providers: [ClamAvService, ClamAvResolver],
  exports: [ClamAvService],
})
export class ClamAvModule {}
