import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
// import Notifications from 'src/components/Dashboard/Views/Notifications.vue'
import Detail from 'src/components/Dashboard/Views/Detail.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
// import Typography from 'src/components/Dashboard/Views/Typography.vue'
// import TableList from 'src/components/Dashboard/Views/TableList.vue'

import Language from 'src/localize.js'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/stats',
    children: [
      {
        path: 'overview',
        name: Language('routes', 'overview'),
        component: Overview
      },
      {
        path: 'stats',
        name: Language('routes', 'stats'),
        component: UserProfile
      },
      {
        path: 'detail',
        name: Language('routes', 'detail'),
        component: Detail
      },
      {
        path: 'maps',
        name: Language('routes', 'maps'),
        component: Maps
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
