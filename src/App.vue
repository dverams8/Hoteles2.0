
<template>
  <div class="container">
    <AppHeader />
    <SearchBar />

    <div class="card-grid">
      <HotelCard
        v-for="hotel in hotels"
        :key="hotel.name"
        v-bind="hotel"
      />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import SearchBar from '@/components/SearchBar.vue'
import HotelCard from '@/components/HotelCard.vue'

export default {
  components: { AppHeader, SearchBar, HotelCard },
  data() {
    return {
      hotels: [
        { name: "Hotel 1", plants: 5, electric: "600 kW", water: "600 L", gas: "600 m³" },
        { name: "Hotel 2", plants: 6, electric: "600 kW", water: "600 L", gas: "600 m³" },
        { name: "Hotel 3", plants: 5, electric: "600 kW", water: "600 L", gas: "600 m³" },
        { name: "Hotel 4", plants: 6, electric: "600 kW", water: "600 L", gas: "600 m³" },
        { name: "Hotel 5", plants: 4, electric: "600 kW", water: "600 L", gas: "600 m³" },
        { name: "Hotel 6", plants: 5, electric: "600 kW", water: "600 L", gas: "600 m³" },
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
