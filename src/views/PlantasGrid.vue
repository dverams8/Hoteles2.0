<template>
  <div class="container">
    <AppHeader />
    <SearchBar />
    <div class="card-grid">
      <PlantaCard
        v-for="planta in plantas"
        :key="planta.name"
        v-bind="planta"
      />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/HeaderyComponentesAsi/AppHeader.vue'
import SearchBar from '@/components/HeaderyComponentesAsi/SearchBar.vue'
import PlantaCard from '@/components/ui/PlantasCard.vue'

export default {
  components: { AppHeader, SearchBar, PlantaCard },
  data() {
    return {
      plantas: [
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