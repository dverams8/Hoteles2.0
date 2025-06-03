<template>
  <div class="container">
    <AppHeader />
    <SearchBar />
    <AppGridHoteles />
    <div class="card-grid">
      <router-link
        v-for="hotel in hotels"
        :key="hotel.name"
        :to="`/hoteles/${hotel.name}`"
        style="text-decoration: none;"
      >
        <HotelCard v-bind="hotel" />
      </router-link>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/HeaderyComponentesAsi/AppHeader.vue'
import SearchBar from '@/components/HeaderyComponentesAsi/SearchBar.vue'
import HotelCard from '@/components/ui/HotelCard.vue'
import AppGridHoteles from '@/components/HeaderyComponentesAsi/AppGridHoteles.vue'

export default {
  components: { AppHeader, SearchBar, HotelCard, AppGridHoteles },
  data() {
    return {
      hotels: [
        { name: "Hotel 1", plantas: 5, luz: "600 kW", agua: "600 L", gas: "600 m³" },
        { name: "Hotel 2", plantas: 6, luz: "600 kW", agua: "600 L", gas: "600 m³" },
        { name: "Hotel 3", plantas: 5, luz: "600 kW", agua: "600 L", gas: "600 m³" },
        { name: "Hotel 4", plantas: 6, luz: "600 kW", agua: "600 L", gas: "600 m³" },
        { name: "Hotel 5", plantas: 4, luz: "600 kW", agua: "600 L", gas: "600 m³" },
        { name: "Hotel 6", plantas: 5, luz: "600 kW", agua: "600 L", gas: "600 m³" },
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
