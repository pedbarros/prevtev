
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Tev.vue') },
      { path: 'menu-inicial', name:'MenuInicial',  component: () => import('pages/MenuInicial.vue') },
      { path: 'o-que-tev', name:'OQueTEV',  component: () => import('pages/OQueTEV.vue') },
      { path: 'alarme-medicacao', name:'AlarmeMedicacao',  component: () => import('pages/AlarmeMedicacao.vue') }
    ]
  },


]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
