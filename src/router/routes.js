
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/cadastroVacina', component: () => import('pages/cadastroVacina.vue') },
      { path: '/cadastroAnimais', component: () => import('pages/cadastroAnimais.vue') },
      { path: '/confirmarEmail', component: () => import('pages/confirmarEmail.vue') },
      { path: '/recuperarSenha', component: () => import('pages/recuperarSenha.vue') },
      { path: '/cadastroAgenda', component: () => import('pages/cadastroAgenda.vue') },
      { path: '/calendario', component: () => import('pages/calendario.vue') },
      { path: '/resetAdm', component: () => import('pages/resetAdm.vue') }
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
