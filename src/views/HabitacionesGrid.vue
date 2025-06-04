<template>
  <div class="container">
    <AppHeader />
    <SearchBar />
    <div class="card-grid">
      <HabitacionesCard v-for="habitacion in habitaciones" :key="habitacion.name" v-bind="habitacion"
        :hotel-id="hotelId" :planta-id="plantaId" />
    </div>
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
      habitaciones: [
        { name: "Habitación 1", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Ocupado" },
        { name: "Habitación 2", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Ocupado" },
        { name: "Habitación 3", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Ocupado" },
        { name: "Habitación 4", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Disponible" },
        { name: "Habitación 5", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Disponible" },
        { name: "Habitación 6", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Disponible" },
      ]
    }
  },
  computed: {
    hotelId() { return this.$route.params.hotelId },
    plantaId() { return this.$route.params.plantaId },
    habitacionesFiltradas() {
      return this.habitaciones.filter(h => h.planta === this.plantaId)
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
