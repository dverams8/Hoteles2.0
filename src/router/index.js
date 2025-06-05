// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// usa rutas relativas limpias
import HotelesView from '../views/HotelesGrid.vue'
import PlantasView from '../views/PlantasGrid.vue'
import HabitacionesView from '../views/HabitacionesGrid.vue'
// import PlantasCard from '../components/ui/PlantasCard.vue'
// import HabitacionesView from '../views/HabitacionesGrid.vue'
import AlertasCard from '../components/ui/AlertasCard.vue'
// import PlantasCard from '../components/ui/PlantasCard.vue'

const routes = [
  { path: '/', redirect: '/hoteles' },
  { path: '/hoteles', name: 'Hoteles', component: HotelesView },
  { path: '/hoteles/:hotelId', name: 'Plantas', component: PlantasView },
  { path: '/hoteles/:hotelId/plantas/:plantaId', name: 'Alertas', component: AlertasCard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router