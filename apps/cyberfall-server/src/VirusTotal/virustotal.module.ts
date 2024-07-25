import { Module } from "@nestjs/common";
import { VirusTotalService } from "./virustotal.service";
import { VirusTotalController } from "./virustotal.controller";
import { VirusTotalResolver } from "./virustotal.resolver";

@Module({
  controllers: [VirusTotalController],
  providers: [VirusTotalService, VirusTotalResolver],
  exports: [VirusTotalService],
})
export class VirusTotalModule {}
