// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// usa rutas relativas limpias
import HotelesView from '../views/HotelesGrid.vue'
import PlantasView from '../views/PlantasGrid.vue'
import HabitacionesView from '../views/HabitacionesGrid.vue'


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