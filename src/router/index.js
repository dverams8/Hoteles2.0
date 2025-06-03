// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// usa rutas relativas limpias
// import HotelesView from '../views/HotelesGrid.vue'
// import PlantasCard from '../components/ui/PlantasCard.vue'
import PlantasView from '../views/PlantasGrid.vue'
// import HabitacionesCard from '../components/ui/HabitacionesCard.vue'
import HabitacionesView from '../views/HabitacionesGrid.vue'
import GraficaMensual from '@/components/HeaderyComponentesAsi/graficaMensual.vue'
import GraficaSemanal from '@/components/HeaderyComponentesAsi/graficaSemanal.vue'
import GraficaDiaria from '@/components/HeaderyComponentesAsi/graficaDiaria.vue'

const routes = [
  { path: '/', redirect: '/hoteles'},
  // { path: '/hoteles', name: 'Hoteles', component: HotelesView },
  // { path: '/hoteles/:hotelId', name: 'Plantas', component: PlantasCard},
  { path: '/hoteles/:hotelId', name: 'Plantas', component: PlantasView},
  // { path: '/hoteles/:hotelId/plantas/:plantaId', name: 'Habitaciones', component: HabitacionesCard}
  { path: '/hoteles/:hotelId/plantas/:plantaId', name: 'Habitaciones', component: HabitacionesView },
  {path: '/hoteles', name: 'Habitaciones', component: GraficaMensual},
  { path: '/mensual', name: 'graficaMensual', component: GraficaMensual },
  { path: '/semanal', name: 'graficaSemanal', component: GraficaSemanal },
  { path: '/diaria', name: 'graficaDiaria', component: GraficaDiaria },
  { path: '/', redirect: '/mensual' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router