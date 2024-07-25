import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WebsiteTitle } from "../website/WebsiteTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const FirewallRuleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ruleName" source="ruleName" />
        <TextInput label="ruleDetails" multiline source="ruleDetails" />
        <ReferenceInput source="website.id" reference="Website" label="website">
          <SelectInput optionText={WebsiteTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
