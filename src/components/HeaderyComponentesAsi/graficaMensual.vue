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
    <div ref="chartContainer" style="width: 100%; height: 400px; margin-top: 0;"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import * as echarts from 'echarts'

const chartContainer = ref(null)
let myChart = null
const tipoGrafica = ref('mensual')
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
      data:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'],
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
        data:  [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210],
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