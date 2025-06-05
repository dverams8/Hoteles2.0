<template>
  <div class="grafica-wrapper">
    <div class="selector-grafica">
      <label style="color:white;margin-right:8px;">
        Tipo de gráfica: {{ labelGrafica }}
      </label>
    </div>
    <div ref="chartContainer" style="width: 100%; height: 400px; margin-top: 0;"></div>
    <div class="q-pa-md">
      <div class="q-pb-sm">
      </div>

      <q-date v-model="days" range multiple />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import * as echarts from 'echarts'
import { QDate } from 'quasar'


const days = ref([
  { from: '2025/06/01', to: '2025/06/10' },
  { from: '2025/06/21', to: '2025/06/25' }
])

const chartContainer = ref(null)
let myChart = null
const router = useRouter()

const totalDiasSeleccionados = computed(() => {
  let total = 0

  const rangos = Array.isArray(days.value) ? days.value : [days.value]
  for (const range of rangos) {
    if (!range || !range.from || !range.to) {
      const from = new Date(range.from.replace(/-/g, '/'))
      const to = new Date(range.to.replace(/-/g, '/'))
      total += Math.floor((to - from) / (1000 * 60 * 60 * 24)) + 1
    }}
    return total
})

  const labelGrafica = computed(() => {
    if (totalDiasSeleccionados.value === 1) {
      return 'Día'
    } else if (totalDiasSeleccionados.value <= 7) {
      return 'Semanal'
    } else if (totalDiasSeleccionados.value > 7 && totalDiasSeleccionados.value <= 30) {
      return 'Mensual'
    } else if (totalDiasSeleccionados.value <= 366) { 
      return 'Anual'
    }else {
      return 'vacio'
    }
  })

  watch(totalDiasSeleccionados, (nuevoValor) => {
    if (nuevoValor === 1) {
      router.push({ name: 'graficaDiaria' })
    }if(nuevoValor === 0){
      router.push({ name: 'graficaVacia' })
    } else if (nuevoValor <= 7) {
      router.push({ name: 'graficaSemanal' })
    } else {
      router.push({ name: 'graficaMensual' })
    }
  })

  onMounted(() => {
    myChart = echarts.init(chartContainer.value, 'dark')

    const option = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Electricidad', 'Agua', 'Gas'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Agua',
          type: 'line',
          data: [431, 256, 315, 172, 491, 204, 320, 488, 229, 117, 371, 440],
          lineStyle: {
            color: '#2060be'
          },
          itemStyle: {
            color: '#2060be'
          }

        },
        {
          name: 'Gas',
          type: 'line',
          data: [321, 394, 140, 471, 217, 382, 436, 110, 176, 225, 488, 362],
          lineStyle: {
            color: '#53e18d'
          },
          itemStyle: {
            color: '#53e18d'
          }
        },
        {
          name: 'Electricidad',
          type: 'line',
          data: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210],
          lineStyle: {
            color: '#dbb625'
          },
          itemStyle: {
            color: '#dbb625'
          }
        },
      ],
    }

    myChart.setOption(option)
    window.addEventListener('resize', myChart.resize)
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
</style>