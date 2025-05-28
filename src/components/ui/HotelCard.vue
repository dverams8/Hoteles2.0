<template>
  <div class="hotel-card">
    <div id="titulo">
       {{ name }}
    </div>
     <div id="subtitulo">
       Cantidad de Plantas: {{ plantas }}
     </div>
     <div class="datos">
      <div>
        <div class="izquierda"><i id="rayo" class="fa-solid fa-bolt"></i> Consumo Eléctrico: </div>
        <div class="derecha"><strong>{{ luz }}</strong></div>
      </div>
      <div>
        <div class="izquierda"><i id="agua" class="fa-solid fa-droplet"></i> Consumo de Agua: </div>
        <div class="derecha"><strong>{{ agua }}</strong></div>
      </div>
      <div>
        <div class="izquierda"><i id="gas" class="fa-solid fa-fire-flame-curved"></i> Consumo de Gas: </div>
        <div class="derecha"><strong>{{ gas }}</strong></div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  props: ['name', 'plantas', 'luz', 'agua', 'gas'],
}
</script>

<style scoped>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  .hotel-card {
    background: linear-gradient(135deg, #322a80, #3f2f91);
    border-radius: 20px;
    padding: 1rem;
    width: 500px;
    height: 250px;
    color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    margin: 20px;
    background-color: #35348b;
    opacity: 1;
    background: linear-gradient(135deg, #29297c55 25%, transparent 25%) -23px 0/ 46px 46px, linear-gradient(225deg, #29297c 25%, transparent 25%) -23px 0/ 46px 46px, linear-gradient(315deg, #29297c55 25%, transparent 25%) 0px 0/ 46px 46px, linear-gradient(45deg, #29297c 25%, #2e3aa7 25%) 0px 0/ 46px 46px;
  }

  #titulo, #subtitulo {
    justify-self: center;

  }

  #titulo {
    font-size: 25px;
  }

  #subtitulo {
    font-size: 15px;
    margin-bottom: 30px;
  }

  .datos div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
  }

  #rayo, #agua, #gas {
    font-size: 25px;
    font-family: "Font Awesome 6 Free";
    margin-right: 20px;
  }

  .izquierda {
    margin-left: 20px;
  }

  .derecha {
    margin-right: 20px;
  }

</style>
