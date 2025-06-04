<!-- src/components/StackedLineChart.vue -->
<template>
  <div class="grafica-wrapper">
    <div class="selector-grafica">
      <label for="tipoGrafica" style="color:white;margin-right:8px;">Tipo de gráfica:</label>
      <select id="tipoGrafica" v-model="tipoGrafica" @change="actualizarGrafica">
        <option value="diaria">Diaria</option>
        <option value="semanal">Semanal</option>
        <option value="mensual">Mensual</option>
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
const tipoGrafica = ref('diaria')
const router = useRouter()

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
      data: ['00:00', '05:00', '10:00', '15:00', '20:00', '24:00'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Agua',
        type: 'line',
        data: [314, 197, 461, 321, 149, 485],
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
        data: [278, 350, 101, 403, 245, 499],
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
        data: [371, 422, 183, 284, 144, 331],
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