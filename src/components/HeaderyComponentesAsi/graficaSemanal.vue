<!-- src/components/StackedLineChart.vue -->
<template>
  <div class="grafica-wrapper">
    <div class="selector-grafica">
      <label for="tipoGrafica" style="color:white;margin-right:8px;">Tipo de gráfica:</label>
      <select id="tipoGrafica" v-model="tipoGrafica" @change="actualizarGrafica">
        <option value="mensual">Mensual</option>
        <option value="semanal">Semanal</option>
        <option value="diaria">Diaria</option>
      </select>
    </div>
    <div ref="chartContainer" style="width: 100%; height: 400px;"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import * as echarts from 'echarts'

const chartContainer = ref(null)
let myChart = null
const tipoGrafica = ref('semanal')
const router = useRouter()

onMounted(() => {
  myChart = echarts.init(chartContainer.value, 'dark')

  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Agua', 'Gas', 'Electricidad'],
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
      data: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Agua',
        type: 'line',
        data: [499, 138, 243, 352, 409, 310, 201],
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
        data: [420, 317, 276, 112, 390, 451, 134]
        ,
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
        data: [175, 486, 398, 145, 278, 300, 229],
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

function actualizarGrafica() {
  if (tipoGrafica.value === 'mensual') {
    router.push({ name: 'graficaMensual' })
  } else if (tipoGrafica.value === 'semanal') {
    router.push({ name: 'graficaSemanal' })
  } else if (tipoGrafica.value === 'diaria') {
    router.push({ name: 'graficaDiaria' })
  }
}

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
  background: rgba(30, 30, 60, 0.7);
  padding: 8px 12px;
  border-radius: 8px;
}
</style>