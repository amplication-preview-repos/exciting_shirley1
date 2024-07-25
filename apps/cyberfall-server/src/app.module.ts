import { Module } from "@nestjs/common";
import { WebsiteModule } from "./website/website.module";
import { ScanReportModule } from "./scanReport/scanReport.module";
import { ThreatModule } from "./threat/threat.module";
import { FirewallRuleModule } from "./firewallRule/firewallRule.module";
import { UserModule } from "./user/user.module";
import { TenantModule } from "./tenant/tenant.module";
import { ClamAvModule } from "./ClamAv/clamav.module";
import { CloudflareModule } from "./Cloudflare/cloudflare.module";
import { VirusTotalModule } from "./VirusTotal/virustotal.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    WebsiteModule,
    ScanReportModule,
    ThreatModule,
    FirewallRuleModule,
    UserModule,
    TenantModule,
    ClamAvModule,
    CloudflareModule,
    VirusTotalModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
