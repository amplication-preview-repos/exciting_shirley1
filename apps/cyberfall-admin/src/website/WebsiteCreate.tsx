import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ScanReportTitle } from "../scanReport/ScanReportTitle";
import { ThreatTitle } from "../threat/ThreatTitle";
import { FirewallRuleTitle } from "../firewallRule/FirewallRuleTitle";
import { UserTitle } from "../user/UserTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const WebsiteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="url" source="url" />
        <ReferenceArrayInput
          source="scanReports"
          reference="ScanReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScanReportTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="threats"
          reference="Threat"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ThreatTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="firewallRules"
          reference="FirewallRule"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FirewallRuleTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="tenant.id" reference="Tenant" label="tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
