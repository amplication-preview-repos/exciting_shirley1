/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Website } from "../../website/base/Website";
import { ScanReport } from "../../scanReport/base/ScanReport";
import { User } from "../../user/base/User";
import { Threat } from "../../threat/base/Threat";
import { FirewallRule } from "../../firewallRule/base/FirewallRule";

@ObjectType()
class Tenant {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

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
  name!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Website],
  })
  @ValidateNested()
  @Type(() => Website)
  @IsOptional()
  websites?: Array<Website>;

  @ApiProperty({
    required: false,
    type: () => [ScanReport],
  })
  @ValidateNested()
  @Type(() => ScanReport)
  @IsOptional()
  scanReports?: Array<ScanReport>;

  @ApiProperty({
    required: false,
    type: () => [User],
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  users?: Array<User>;

  @ApiProperty({
    required: false,
    type: () => [Threat],
  })
  @ValidateNested()
  @Type(() => Threat)
  @IsOptional()
  threats?: Array<Threat>;

  @ApiProperty({
    required: false,
    type: () => [FirewallRule],
  })
  @ValidateNested()
  @Type(() => FirewallRule)
  @IsOptional()
  firewallRules?: Array<FirewallRule>;
}

export { Tenant as Tenant };
