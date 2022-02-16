export default {
  routes:[
    {
        path: '/',
        component: '@/../layouts/index',
        routes: [
          { path: '/list', component: '@/list' },
          { path: '/admin', component: '@/admin' },
          { path: '/users', component: '@/users' },
        ],
      }, 
],

}