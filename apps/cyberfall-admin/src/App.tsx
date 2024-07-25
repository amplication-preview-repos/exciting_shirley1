import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WebsiteList } from "./website/WebsiteList";
import { WebsiteCreate } from "./website/WebsiteCreate";
import { WebsiteEdit } from "./website/WebsiteEdit";
import { WebsiteShow } from "./website/WebsiteShow";
import { ScanReportList } from "./scanReport/ScanReportList";
import { ScanReportCreate } from "./scanReport/ScanReportCreate";
import { ScanReportEdit } from "./scanReport/ScanReportEdit";
import { ScanReportShow } from "./scanReport/ScanReportShow";
import { ThreatList } from "./threat/ThreatList";
import { ThreatCreate } from "./threat/ThreatCreate";
import { ThreatEdit } from "./threat/ThreatEdit";
import { ThreatShow } from "./threat/ThreatShow";
import { FirewallRuleList } from "./firewallRule/FirewallRuleList";
import { FirewallRuleCreate } from "./firewallRule/FirewallRuleCreate";
import { FirewallRuleEdit } from "./firewallRule/FirewallRuleEdit";
import { FirewallRuleShow } from "./firewallRule/FirewallRuleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TenantList } from "./tenant/TenantList";
import { TenantCreate } from "./tenant/TenantCreate";
import { TenantEdit } from "./tenant/TenantEdit";
import { TenantShow } from "./tenant/TenantShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Cyberfall"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Website"
          list={WebsiteList}
          edit={WebsiteEdit}
          create={WebsiteCreate}
          show={WebsiteShow}
        />
        <Resource
          name="ScanReport"
          list={ScanReportList}
          edit={ScanReportEdit}
          create={ScanReportCreate}
          show={ScanReportShow}
        />
        <Resource
          name="Threat"
          list={ThreatList}
          edit={ThreatEdit}
          create={ThreatCreate}
          show={ThreatShow}
        />
        <Resource
          name="FirewallRule"
          list={FirewallRuleList}
          edit={FirewallRuleEdit}
          create={FirewallRuleCreate}
          show={FirewallRuleShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Tenant"
          list={TenantList}
          edit={TenantEdit}
          create={TenantCreate}
          show={TenantShow}
        />
      </Admin>
    </div>
  );
};

export default App;
