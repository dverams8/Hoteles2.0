<template>
  <div class="card">
    <div class="header">
      <h1>{{ nombre }}</h1>
      <div class="logo">Logo</div>
    </div>

    <div class="info">
      <div class="info-item">
        <i class="fa-solid fa-bolt"></i>
        <p>Consumo eléctrico<br>{{luz}}</p>
      </div>

      <div class="info-item">
        <i class="fa-solid fa-droplet"></i>
        <p>Consumo de agua<br>{{agua}}</p>
      </div>

      <div class="info-item">
        <i class="fa-solid fa-fire"></i>
        <p>Consumo de gas</p>
        <p>{{gas}}</p>
      </div>

      <div class="info-item ocupacion">
        <span class="dot"></span>
        <p>Ocupación<br>{{estado}}</p>
      </div>
    </div>

    <div class="footer-icons">
      <i class="fa-solid fa-chart-bar"></i>
      <i class="fa-solid fa-exclamation"></i>
      <i class="fa-solid fa-gear"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['nombre', 'estado', 'luz', 'agua', 'gas'],
}
</script>


<style scoped>
template {
  background: radial-gradient(circle at center, #2c2d91, #1b1d3f);
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.card {
  background: linear-gradient(135deg, #29297c55 25%, transparent 25%) -23px 0/ 46px 46px, linear-gradient(225deg, #29297c 25%, transparent 25%) -23px 0/ 46px 46px, linear-gradient(315deg, #29297c55 25%, transparent 25%) 0px 0/ 46px 46px, linear-gradient(45deg, #29297c 25%, #2e3aa7 25%) 0px 0/ 46px 46px;
  border-radius: 20px;
  padding: 20px;
  width: 300px;
  color: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.logo i {
  font-size: 24px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.info-item {
  background-color: #4e4eaf;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.info-item i {
  font-size: 20px;
}

.ocupacion .dot {
  width: 16px;
  height: 16px;
  background-color: red;
  border-radius: 50%;
}

.footer-icons {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
}

</style>