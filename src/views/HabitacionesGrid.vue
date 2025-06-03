<template>
  <div class="container">
    <AppHeader />
    <SearchBar />
    <router-link to="/hoteles/:hotelId">
    <div class="card-grid">
      <HabitacionesCard
        v-for="habitacion in habitaciones"
        :key="habitacion.nombre"
        v-bind="habitacion"
      />
    </div>
  </router-link>
  </div>
</template>

<script>
import AppHeader from '@/components/HeaderyComponentesAsi/AppHeader.vue'
import SearchBar from '@/components/HeaderyComponentesAsi/SearchBar.vue'
import HabitacionesCard from '@/components/ui/HabitacionesCard.vue'

export default {
  components: { AppHeader, SearchBar, HabitacionesCard },
  data() {
    return {
      hotels: [
        { name: "Planta 1", habitaciones: 5, ocupadas: 2, electricNow: "600kW", waterNow: "600 L", gasNow: "600 m³", electricMensual: "800 kW", waterMensual: "800 L", gasMensual: "800 m³" },
        { name: "Planta 2", habitaciones: 6, ocupadas: 2, electricNow: "600kW", waterNow: "600 L", gasNow: "600 m³", electricMensual: "800 kW", waterMensual: "800 L", gasMensual: "800 m³" },
        { name: "Planta 3", habitaciones: 5, ocupadas: 2, electricNow: "600kW", waterNow: "600 L", gasNow: "600 m³", electricMensual: "800 kW", waterMensual: "800 L", gasMensual: "800 m³" },
        { name: "Planta 4", habitaciones: 6, ocupadas: 2, electricNow: "600kW", waterNow: "600 L", gasNow: "600 m³", electricMensual: "800 kW", waterMensual: "800 L", gasMensual: "800 m³" },
        { name: "Planta 5", habitaciones: 4, ocupadas: 2, electricNow: "600kW", waterNow: "600 L", gasNow: "600 m³", electricMensual: "800 kW", waterMensual: "800 L", gasMensual: "800 m³" },
        { name: "Planta 6", habitaciones: 5, ocupadas: 2, electricNow: "600kW", waterNow: "600 L", gasNow: "600 m³", electricMensual: "800 kW", waterMensual: "800 L", gasMensual: "800 m³" },
      ] 
    }
  }
}
</script>

<style scoped>

.container {
  background-color: #2e285a;
  min-height: 100vh;
  width: 100%;
  color: white;
}
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}
</style>
