// import Layout from "./layout/layout"
import Activites from "./Pages/activities/activites"
import Analytics from "./Pages/analytics/analytics"
import Dashboard from "./Pages/dashboard/dashboard"
import Payments from "./Pages/payments/payments"
import Settings from "./Pages/settings/settings"
import Tasks from "./Pages/tasks/tasks"


export const routes = [
    {path: '/', component: Dashboard},
    {path: '/dashboard', component: Dashboard},
    {path: '/firm-dashboard', component: Dashboard},
    {path: '/firm-feed', component: Dashboard},
    {path: '/tasks', component: Tasks  },
    {path: '/activites', component: Activites  },
    {path: '/payments', component: Payments  },
    {path: '/analytics', component: Analytics  },
    {path: '/settings', component: Settings  },
]