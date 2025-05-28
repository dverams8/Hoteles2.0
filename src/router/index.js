// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// usa rutas relativas limpias
// import HotelesView from '../views/HotelesGrid.vue'
// import PlantasCard from '../components/ui/PlantasCard.vue'
import PlantasView from '../views/PlantasGrid.vue'
// import HabitacionesCard from '../components/ui/HabitacionesCard.vue'
import HabitacionesView from '../views/HabitacionesGrid.vue'
import graficaVue from '../components/HeaderyComponentesAsi/graficaVue.vue'

const routes = [
  { path: '/', redirect: '/hoteles'},
  // { path: '/hoteles', name: 'Hoteles', component: HotelesView },
  // { path: '/hoteles/:hotelId', name: 'Plantas', component: PlantasCard},
  { path: '/hoteles/:hotelId', name: 'Plantas', component: PlantasView},
  // { path: '/hoteles/:hotelId/plantas/:plantaId', name: 'Habitaciones', component: HabitacionesCard}
  { path: '/hoteles/:hotelId/plantas/:plantaId', name: 'Habitaciones', component: HabitacionesView },
  {path: '/hoteles', name: 'Habitaciones', component: graficaVue}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router