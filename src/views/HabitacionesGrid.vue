<template>
  <div class="container" ref="ContenedorDiv">
    <AppHeader titulo="Habitaciones" />
    <SearchBar />

    <div class="card-grid">
      <HabitacionesCard v-for="(habitacion, idx) in habitaciones" :key="habitacion.name" v-bind="habitacion"
        :hotel-id="hotelId" :planta-id="plantaId" :ref="'habitacionCard' + idx" @mostrarAlertaEvento="mostrarAlerta"
        @mostrarConfigEvento="mostrarConfig" />
    </div>
  </div>

  <div ref="configRef" id="config" class="targeta">
    <ConfigCard v-if="habitacionSeleccionada" :key="habitacionSeleccionada.name + habitacionSeleccionada.estado"
      :name="habitacionSeleccionada.name" :estado="habitacionSeleccionada.estado" @GuardarInforme="InformeGuardado"
      @ocultarConfigEvento="ocultarConfig" />
  </div>

  <div ref="alertaRef" id="alerta" class="targeta">
    <AlertasCard :name="habitacionSeleccionada?.name" @ocultarAlertaEvento="ocultarAlerta" />
  </div>

</template>

<script>
import AppHeader from '@/components/HeaderyComponentesAsi/AppHeader.vue'
import SearchBar from '@/components/HeaderyComponentesAsi/SearchBar.vue'
import HabitacionesCard from '@/components/ui/HabitacionesCard.vue'
import AlertasCard from '@/components/ui/AlertasCard.vue'
import ConfigCard from '../components/ui/ConfigCard.vue'

export default {
  components: { AppHeader, SearchBar, HabitacionesCard, AlertasCard, ConfigCard },
  data() {
    return {
      dialogConfigVisible: false,
      habitacionSeleccionada: null,
      habitaciones: [
        { name: "Habitación 101", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Disponible" },
        { name: "Habitación 102", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Disponible" },
        { name: "Habitación 103", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Disponible" },
        { name: "Habitación 104", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Disponible" },
        { name: "Habitación 105", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Disponible" },
        { name: "Habitación 106", luz: "600kW", agua: "600 L", gas: "600 m³", estado: "Disponible" }
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
    InformeGuardado(datos) {
      if (this.habitacionSeleccionada) {
        this.habitacionSeleccionada.name = datos.nombre
        switch (datos.estado) {
          case 1: this.habitacionSeleccionada.estado = 'Disponible'; break
          case 2: this.habitacionSeleccionada.estado = 'Ocupada'; break
          case 3: this.habitacionSeleccionada.estado = 'En Mantenimiento'; break
          case 4: this.habitacionSeleccionada.estado = 'Reservada'; break
        }
        const idx = this.habitaciones.findIndex(h => h.name === this.habitacionSeleccionada.name)
        if (idx !== -1 && this.$refs['habitacionCard' + idx]) {
          const card = Array.isArray(this.$refs['habitacionCard' + idx])
            ? this.$refs['habitacionCard' + idx][0]
            : this.$refs['habitacionCard' + idx]
          card.cambiarColorCirculo(this.habitacionSeleccionada.estado)
        }
      }
    },
    mostrarAlerta(nombreHabitacion) {
      this.habitacionSeleccionada = this.habitaciones.find(hab => hab.name === nombreHabitacion)
      this.$refs.alertaRef.style.display = 'flex'
      this.$refs.ContenedorDiv.style.filter = 'blur(30px)'
      document.body.style.overflow = 'hidden'
    },
    ocultarAlerta() {
      this.$refs.alertaRef.style.display = 'none'
      this.$refs.ContenedorDiv.style.filter = ''
      document.body.style.overflow = ''
    },
    mostrarConfig(nombreHabitacion) {
      this.habitacionSeleccionada = this.habitaciones.find(hab => hab.name === nombreHabitacion)
      this.$refs.configRef.style.display = 'block'
      this.$refs.ContenedorDiv.style.filter = 'blur(30px)'
      document.body.style.overflow = 'hidden'
    },
    ocultarConfig() {
      this.dialogConfigVisible = false
      document.body.style.overflow = ''
      this.$refs.configRef.style.display = 'none'
      this.$refs.ContenedorDiv.style.filter = ''

    }
  }
}
</script>


<style scoped>

.container {
  background-color: #2e285a;
  height: 1300px;
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


.targeta {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 500px;
  max-width: 90vw;
  z-index: 2000;
}

#alerta {
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.targeta {
  display: none;
}
</style>
