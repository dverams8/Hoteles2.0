<template>
  <div id="Alertas" ref="alertasDiv">
    <AlertasCard :name="habitacionSeleccionada" @ocultarAlertaEvento="ocultarAlerta"/>
  </div>
  <div class="container" ref="ContenedorDiv">
      <AppHeader titulo="Habitaciones"/>
      <SearchBar />
  
      <div class="card-grid">
        <HabitacionesCard v-for="habitacion in habitaciones" :key="habitacion.name" v-bind="habitacion"
          :hotel-id="hotelId" :planta-id="plantaId" @mostrarAlertaEvento="mostrarAlerta" />
      </div>
  </div>
</template>

<script>
  import AppHeader from '@/components/HeaderyComponentesAsi/AppHeader.vue'
  import SearchBar from '@/components/HeaderyComponentesAsi/SearchBar.vue'
  import HabitacionesCard from '@/components/ui/HabitacionesCard.vue'
  import AlertasCard from '@/components/ui/AlertasCard.vue'

  export default {
    components: { AppHeader, SearchBar, HabitacionesCard, AlertasCard },
    data() {
      return {
        habitacionSeleccionada: null,
        habitaciones: [
          { name: "Habitación 101", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Ocupado" },
          { name: "Habitación 102", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Ocupado" },
          { name: "Habitación 103", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Ocupado" },
          { name: "Habitación 104", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Disponible" },
          { name: "Habitación 105", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Disponible" },
          { name: "Habitación 106", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Disponible" },
        ]
      }
    },
    computed: {
      hotelId() { return this.$route.params.hotelId },
      plantaId() { return this.$route.params.plantaId },
      habitacionesFiltradas() {
        return this.habitaciones.filter(h => h.planta === this.plantaId)
      }
    },
    methods: {
      mostrarAlerta(nombreHabitacion) {
        this.habitacionSeleccionada = nombreHabitacion
        this.$refs.alertasDiv.style.display = 'block'
        this.$refs.ContenedorDiv.style.filter = 'blur(30px)'
        
      },
      ocultarAlerta() {
        this.$refs.alertasDiv.style.display = 'none'
        this.$refs.ContenedorDiv.style.filter = 'none'
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

#Alertas {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 100%;
  justify-items: center;
  display: none;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 9998;
}
</style>
