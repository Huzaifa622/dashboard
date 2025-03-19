// import Layout from "./layout/layout"
import Activites from "./Pages/admin/activities/activites";
import Analytics from "./Pages/admin/analytics/analytics";
import Dashboard from "./Pages/admin/dashboard/dashboard";
import Payments from "./Pages/admin/payments/payments";
import Settings from "./Pages/admin/settings/settings";
import Agencies from "./Pages/admin/agencies/agencies";
import Subscription from "./Pages/agency/subscription";
import Agents from "./Pages/agency/agent";
import Cases from "./Pages/agency/cases";
import AgencyDashboard from "./Pages/agency/dashboard/dashboard";
import AgencyTasks from "./Pages/agency/tasks";

export const routes = [
  { path: "/super-admin/", component: Dashboard },
//   { path: "/super-admin/dashboard", component: Dashboard },
//   { path: "/super-admin/firm-dashboard", component: Dashboard },
//   { path: "/super-admin/firm-feed", component: Dashboard },
  { path: "/super-admin/agencies", component: Agencies },
//   { path: "/super-admin/activites", component: Activites },
//   { path: "/super-admin/payments", component: Payments },
  { path: "/super-admin/analytics", component: Analytics },
  { path: "/super-admin/settings", component: Settings },
];
export const agencyRoutes = [
  { path: "/agency/", component: AgencyDashboard },
//   { path: "/agency/dashboard", component: Dashboard },
  { path: "/agency/subscription", component: Subscription },
  { path: "/agency/agents", component: Agents },
  { path: "/agency/cases", component: Cases },
  { path: "/agency/tasks", component: AgencyTasks },
  { path: "/agency/clients", component: Payments },
];
