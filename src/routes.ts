// import Layout from "./layout/layout"
import Activites from "./Pages/activities/activites"
import Analytics from "./Pages/analytics/analytics"
import Dashboard from "./Pages/dashboard/dashboard"
import Payments from "./Pages/payments/payments"
import Settings from "./Pages/settings/settings"
import Tasks from "./Pages/tasks/tasks"


export const routes = [
    {path: '/super-admin/', component: Dashboard},
    {path: '/super-admin/dashboard', component: Dashboard},
    {path: '/super-admin/firm-dashboard', component: Dashboard},
    {path: '/super-admin/firm-feed', component: Dashboard},
    {path: '/super-admin/tasks', component: Tasks  },
    {path: '/super-admin/activites', component: Activites  },
    {path: '/super-admin/payments', component: Payments  },
    {path: '/super-admin/analytics', component: Analytics  },
    {path: '/super-admin/settings', component: Settings  },
]