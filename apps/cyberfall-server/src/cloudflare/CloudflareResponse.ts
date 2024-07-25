import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("CloudflareResponseObject")
class CloudflareResponse {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    domain!: string;

    @Field(() => GraphQLJSON, {
        nullable: true
    })
    dns_info?: InputJsonValue;

    @Field(() => GraphQLJSON, {
        nullable: true
    })
    security_settings?: InputJsonValue;
}

export { CloudflareResponse as CloudflareResponse };