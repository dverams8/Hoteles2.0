<template>
  <div class="search-bar">
    <input type="text" placeholder="Buscar hotel..." />
    <span class="icon">🔍</span>
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  background-color: #5e4d91;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  margin: 1rem auto;
  max-width: 400px;
}
.search-bar input {
  flex: 1;
  border: none;
  background: transparent;
  color: white;
}
.icon {
  margin-left: 0.5rem;
}
</style>
