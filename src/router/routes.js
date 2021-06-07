const routes = [
  {
    path: '/',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      { path: '/', component: () => import('src/pages/Index.vue') }
    ]
  },
  {
    path: '/Login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '/Login', component: () => import('src/pages/Login.vue') },
      { path: '/cadastroUsuario', component: () => import('src/pages/cadastroUsuario.vue') },
      { path: '/confirmarEmail', component: () => import('pages/confirmarEmail.vue') },
      { path: '/recuperarSenha', component: () => import('pages/recuperarSenha.vue') }
    ]
  },
  {
    path: '/UserDashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/amostraAnimais/:horse_id', component: () => import('pages/amostraAnimais.vue'), props: true },
      { path: '/calendario', component: () => import('pages/calendario.vue') },
      // { path: '/resetAdm', component: () => import('pages/resetAdm.vue') },
      { path: '/cartaoVacina/:horse_id', component: () => import('pages/cartaoVacina.vue'), props: true },
      { path: '/UserDashboard', component: () => import('pages/UserDashboard.vue') },
      { path: '/listarAnimais/:owner_id', component: () => import('pages/listarAnimais.vue'), props: true }
    ]
  },
  {
    path: '/AdminDashboard',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '/cadastroVacina/:owner_id/:horse_id', component: () => import('pages/cadastroVacina.vue'), props: true },
      { path: '/cadastroAnimais/:user_id', component: () => import('pages/cadastroAnimais.vue'), props: true },
      { path: '/cadastroAgenda', component: () => import('pages/cadastroAgenda.vue') },
      { path: '/AdminDashboard', component: () => import('src/pages/AdminDashboard.vue') },
      { path: '/UserList/:event_type', component: () => import('src/pages/UserList.vue'), props: true }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
