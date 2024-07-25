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
import { WebsiteUpdateManyWithoutTenantsInput } from "./WebsiteUpdateManyWithoutTenantsInput";
import { Type } from "class-transformer";
import { ScanReportUpdateManyWithoutTenantsInput } from "./ScanReportUpdateManyWithoutTenantsInput";
import { UserUpdateManyWithoutTenantsInput } from "./UserUpdateManyWithoutTenantsInput";
import { ThreatUpdateManyWithoutTenantsInput } from "./ThreatUpdateManyWithoutTenantsInput";
import { FirewallRuleUpdateManyWithoutTenantsInput } from "./FirewallRuleUpdateManyWithoutTenantsInput";

@InputType()
class TenantUpdateInput {
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
    type: () => WebsiteUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => WebsiteUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => WebsiteUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  websites?: WebsiteUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ScanReportUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ScanReportUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ScanReportUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  scanReports?: ScanReportUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => ThreatUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => ThreatUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => ThreatUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  threats?: ThreatUpdateManyWithoutTenantsInput;

  @ApiProperty({
    required: false,
    type: () => FirewallRuleUpdateManyWithoutTenantsInput,
  })
  @ValidateNested()
  @Type(() => FirewallRuleUpdateManyWithoutTenantsInput)
  @IsOptional()
  @Field(() => FirewallRuleUpdateManyWithoutTenantsInput, {
    nullable: true,
  })
  firewallRules?: FirewallRuleUpdateManyWithoutTenantsInput;
}

export { TenantUpdateInput as TenantUpdateInput };
