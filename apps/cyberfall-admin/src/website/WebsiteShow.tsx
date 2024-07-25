import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { WEBSITE_TITLE_FIELD } from "./WebsiteTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const WebsiteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="url" source="url" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="ScanReport"
          target="websiteId"
          label="ScanReports"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="findings" source="findings" />
            <TextField label="status" source="status" />
            <ReferenceField
              label="website"
              source="website.id"
              reference="Website"
            >
              <TextField source={WEBSITE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Threat"
          target="websiteId"
          label="Threats"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="description" source="description" />
            <TextField label="level" source="level" />
            <BooleanField label="mitigated" source="mitigated" />
            <ReferenceField
              label="website"
              source="website.id"
              reference="Website"
            >
              <TextField source={WEBSITE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FirewallRule"
          target="websiteId"
          label="FirewallRules"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="ruleName" source="ruleName" />
            <TextField label="ruleDetails" source="ruleDetails" />
            <ReferenceField
              label="website"
              source="website.id"
              reference="Website"
            >
              <TextField source={WEBSITE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
