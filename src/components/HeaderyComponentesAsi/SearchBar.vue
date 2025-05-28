
<template>
  <div class="busqueda">
    <input type="text" placeholder="Buscar hotel..." />
    <i id="lupa" class="fa-solid fa-magnifying-glass"></i>
  </div>
</template>

<style scoped>
.busqueda {
  display: flex;
  align-items: center;
  background-color: #443670;
  border-radius: 40px;
  margin: 1rem auto;
  max-width: 400px;
  padding: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.busqueda input {
  flex: 1;
  border: none;
  outline: none;
  background: #443670;
  color: #9b9a9e;
  font-size: 15px;
}

#lupa {
  margin-right: 10px;
  font-size: 20px;
  color: #9b9a9e;
}


</style>