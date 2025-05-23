<template>
  <div class="hotel-card">
    <h3>{{ name }}</h3>
    <p class="subtitle">Cantidad de Plantas: {{ plantas }}</p>
    <div class="metrics">
      <div><span>⚡</span> Consumo Eléctrico <strong>{{ electric }}</strong></div>
      <div><span>💧</span> Consumo de Agua <strong>{{ water }}</strong></div>
      <div><span>🔥</span> Consumo de Gas <strong>{{ gas }}</strong></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'panels', 'electric', 'water', 'gas'],
}
</script>

<style>
.hotel-card {
  background: linear-gradient(135deg, #322a80, #3f2f91);
  border-radius: 16px;
  padding: 1rem;
  width: 220px;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
.subtitle {
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}
.metrics div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
}
</style>
