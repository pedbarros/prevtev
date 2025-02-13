
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayoutSemBotaoToolbar.vue'),
    children: [
      { path: '', component: () => import('pages/TelaTev.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'menu-inicial', name:'TelaMenuInicial',  component: () => import('pages/TelaMenuInicial.vue') },
      { path: 'o-que-tev', name:'TelaOQueTEV',  component: () => import('pages/TelaOQueTEV.vue') },
      { path: 'quando-suspeitar', name:'TelaQuandoSuspeitar',  component: () => import('pages/TelaQuandoSuspeitar.vue') },
      { path: 'como-prevenir', name:'TelaComoPrevenir',  component: () => import('pages/TelaComoPrevenir.vue') },
      { path: 'consequencias', name:'TelaConsequencias',  component: () => import('pages/TelaConsequencias.vue') },
      { path: 'cuidados-casa', name:'TelaCuidadosCasa',  component: () => import('pages/TelaCuidadosCasa.vue') },
      { path: 'alarme-medicacao', name:'TelaAlarmeMedicacao',  component: () => import('pages/TelaAlarmeMedicacao.vue') },
      { path: 'lista-medicamentos', name:'TelaListaMedicamentos',  component: () => import('pages/TelaListaMedicamentos.vue') },
      { path: 'sobre-app', name:'TelaSobre',  component: () => import('pages/TelaSobre.vue') },,
      { path: 'como-navegar', name:'TelaComoNavegar',  component: () => import('pages/TelaComoNavegar.vue') },
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
