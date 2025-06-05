<!-- src/components/StackedLineChart.vue -->
<template>
  <div class="grafica-wrapper">
    <div class="selector-grafica">
      <label style="color:white;margin-right:8px;">
        Tipo de gráfica: {{ labelGrafica }}
      </label>

    </div>
    <div class="q-pa-md">
      <div class="q-pb-sm">

        <q-date v-model="days" range multiple />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { QDate } from 'quasar'


const days = ref([
  { from: '2025/06/01', to: '2025/06/10' },
  { from: '2025/06/21', to: '2025/06/25' }
])

let myChart = null
const router = useRouter()

const totalDiasSeleccionados = computed(() => {
  let total = 0
  for (const range of days.value) {
    const from = new Date(range.from.replace(/-/g, '/'))
    const to = new Date(range.to.replace(/-/g, '/'))
    total += Math.floor((to - from) / (1000 * 60 * 60 * 24)) + 1
  }
  return total
})

const labelGrafica = computed(() => {
  if (totalDiasSeleccionados.value === 1) {
    return 'Día'
  } else if (totalDiasSeleccionados.value <= 7) {
    return 'Semanal'
  } else if (totalDiasSeleccionados.value > 7 && totalDiasSeleccionados.value <= 30) {
    return 'Mensual'
  } else {
    return 'Anual'
  }
})

watch(totalDiasSeleccionados, (nuevoValor) => {
  if (nuevoValor === 1) {
    router.push({ name: 'graficaDiaria' })
  } else if (nuevoValor <= 7) {
    router.push({ name: 'graficaSemanal' })
  } else {
    router.push({ name: 'graficaMensual' })
  }
})


onBeforeUnmount(() => {
  if (myChart) {
    window.removeEventListener('resize', myChart.resize)
    myChart.dispose()
  }
})
</script>

<style scoped>
.grafica-wrapper {
  position: relative;
  width: 100%;
  height: 400px;
}

.selector-grafica {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 10;
  background: rgba(44, 44, 84, 0.85);
  padding: 0.75px 2px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 10px;
}

.selector-grafica label {
  font-weight: 600;
  color: #ffffff;
  font-size: 15px;
}

.selector-grafica select {
  background-color: #1c1c3b;
  border: 1px solid #444;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: 0.2s ease-in-out;
  outline: none;
}

.selector-grafica option {
  background-color: #1c1c3b;
  color: #ffffff;
}
</style>