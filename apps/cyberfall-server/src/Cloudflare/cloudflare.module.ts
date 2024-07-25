import { Module } from "@nestjs/common";
import { CloudflareService } from "./cloudflare.service";
import { CloudflareController } from "./cloudflare.controller";
import { CloudflareResolver } from "./cloudflare.resolver";

@Module({
  controllers: [CloudflareController],
  providers: [CloudflareService, CloudflareResolver],
  exports: [CloudflareService],
})
export class CloudflareModule {}
