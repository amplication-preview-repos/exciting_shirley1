import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  BooleanInput,
  ReferenceInput,
} from "react-admin";

import { WebsiteTitle } from "../website/WebsiteTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const ThreatCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="level"
          label="level"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="mitigated" source="mitigated" />
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
