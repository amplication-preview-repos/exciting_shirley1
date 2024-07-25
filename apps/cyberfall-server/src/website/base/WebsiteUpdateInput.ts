/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { ScanReportUpdateManyWithoutWebsitesInput } from "./ScanReportUpdateManyWithoutWebsitesInput";
import { Type } from "class-transformer";
import { ThreatUpdateManyWithoutWebsitesInput } from "./ThreatUpdateManyWithoutWebsitesInput";
import { FirewallRuleUpdateManyWithoutWebsitesInput } from "./FirewallRuleUpdateManyWithoutWebsitesInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { TenantWhereUniqueInput } from "../../tenant/base/TenantWhereUniqueInput";

@InputType()
class WebsiteUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url?: string | null;

  @ApiProperty({
    required: false,
    type: () => ScanReportUpdateManyWithoutWebsitesInput,
  })
  @ValidateNested()
  @Type(() => ScanReportUpdateManyWithoutWebsitesInput)
  @IsOptional()
  @Field(() => ScanReportUpdateManyWithoutWebsitesInput, {
    nullable: true,
  })
  scanReports?: ScanReportUpdateManyWithoutWebsitesInput;

  @ApiProperty({
    required: false,
    type: () => ThreatUpdateManyWithoutWebsitesInput,
  })
  @ValidateNested()
  @Type(() => ThreatUpdateManyWithoutWebsitesInput)
  @IsOptional()
  @Field(() => ThreatUpdateManyWithoutWebsitesInput, {
    nullable: true,
  })
  threats?: ThreatUpdateManyWithoutWebsitesInput;

  @ApiProperty({
    required: false,
    type: () => FirewallRuleUpdateManyWithoutWebsitesInput,
  })
  @ValidateNested()
  @Type(() => FirewallRuleUpdateManyWithoutWebsitesInput)
  @IsOptional()
  @Field(() => FirewallRuleUpdateManyWithoutWebsitesInput, {
    nullable: true,
  })
  firewallRules?: FirewallRuleUpdateManyWithoutWebsitesInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TenantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TenantWhereUniqueInput)
  @IsOptional()
  @Field(() => TenantWhereUniqueInput, {
    nullable: true,
  })
  tenant?: TenantWhereUniqueInput | null;
}

export { WebsiteUpdateInput as WebsiteUpdateInput };