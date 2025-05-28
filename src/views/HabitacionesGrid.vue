<template>
  <div class="container">
    <AppHeader />
    <SearchBar />

    <div class="card-grid">
      <HabitacionesCard
        v-for="habitacion in habitaciones"
        :key="habitacion.nombre"
        v-bind="habitacion"
      />
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
        { nombre: "Habitación 101", estado: "Ocupada", luz: "600 kW", agua: "600 L", gas: "600 m³" },
        { nombre: "Habitación 102", estado: "Disponible", luz: "600 kW", agua: "600 L", gas: "600 m³" },
        { nombre: "Habitación 103", estado: "Disponible", luz: "600 kW", agua: "600 L", gas: "600 m³" },
        { nombre: "Habitación 104", estado: "Disponible", luz: "600 kW", agua: "600 L", gas: "600 m³" },
        { nombre: "Habitación 105", estado: "Disponible", luz: "600 kW", agua: "600 L", gas: "600 m³" },
        { nombre: "Habitación 106", estado: "Disponible", luz: "600 kW", agua: "600 L", gas: "600 m³" },
      ]
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #2e285a;
  min-height: 100vh;
  padding: 1rem;
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
