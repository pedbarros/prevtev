
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Tev.vue') },
      { path: 'menu-inicial', name:'MenuInicial',  component: () => import('pages/MenuInicial.vue') },
      { path: 'o-que-tev', name:'TelaOQueTEV',  component: () => import('pages/TelaOQueTEV.vue') },
      { path: 'quando-suspeitar', name:'TelaQuandoSuspeitar',  component: () => import('pages/TelaQuandoSuspeitar.vue') },
      { path: 'como-prevenir', name:'TelaComoPrevenir',  component: () => import('pages/TelaComoPrevenir.vue') },
      { path: 'consequencias', name:'TelaConsequencias',  component: () => import('pages/TelaConsequencias.vue') },
      { path: 'cuidados-casa', name:'TelaCuidadosCasa',  component: () => import('pages/TelaCuidadosCasa.vue') },
      { path: 'alarme-medicacao', name:'AlarmeMedicacao',  component: () => import('pages/AlarmeMedicacao.vue') },
      { path: 'lista-medicamentos', name:'ListaMedicamentos',  component: () => import('pages/ListaMedicamentos.vue') }
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
