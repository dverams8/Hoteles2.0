// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// import HotelesView from '../views/HotelesGrid.vue'
// import PlantasCard from '../components/ui/PlantasCard.vue'
import PlantasView from '../views/PlantasGrid.vue'
// import HabitacionesCard from '../components/ui/HabitacionesCard.vue'
import HabitacionesView from '../views/HabitacionesGrid.vue'
import GraficaMensual from '@/components/HeaderyComponentesAsi/graficaMensual.vue'
import GraficaSemanal from '@/components/HeaderyComponentesAsi/graficaSemanal.vue'
import GraficaDiaria from '@/components/HeaderyComponentesAsi/graficaDiaria.vue'

const routes = [
  { path: '/', redirect: '/hoteles' },
  { path: '/hoteles', name: 'Hoteles', component: HotelesView },
  { path: '/hoteles/:hotelId', name: 'Plantas', component: PlantasView },
  { path: '/hoteles/:hotelId/plantas/:plantaId', name: 'Habitaciones', component: HabitacionesView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router