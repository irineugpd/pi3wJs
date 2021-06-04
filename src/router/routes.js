
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
      { path: '/listarAnimais/', component: () => import('pages/listarAnimais.vue') }
    ]
  },
  {
    path: '/AdminDashboard',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '/cadastroVacina', component: () => import('pages/cadastroVacina.vue') },
      { path: '/cadastroAnimais', component: () => import('pages/cadastroAnimais.vue') },
      { path: '/cadastroAgenda', component: () => import('pages/cadastroAgenda.vue') },
      { path: '/menu', component: () => import('pages/menu.vue') },
      { path: '/UserList', component: () => import('src/pages/UserList.vue') }
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
