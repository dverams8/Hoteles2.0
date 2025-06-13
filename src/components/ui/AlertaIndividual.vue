<template>
  <div id="contenedor">
    <div id="superior">
      <div id="textoCont">
        <div id="titulo">Alerta {{ id }}</div>
        <div id="fecha">{{ fecha }}</div>
      </div>
      <div id="cruzCont">
        <div id="cruzContorno" @click="$emit('cerrarAlertaIndividual')">
          <div id="cruz"><i id="iconoCruz" class="fa-solid fa-xmark"></i></div>
        </div>
      </div>
    </div>
    <div id="inferior">
      <div id="info-cont">
        <div id="info1" class="info">
          <div class="infoTitulo">Tipo de problema:</div>
          <div id="infoTexto">Eléctrico</div>
        </div>
        <div id="info2" class="info">
          <div class="infoTitulo">Pico de consumo:</div>
          <div id="infoTexto">250 kW / 222 kW</div>
        </div>
        <div id="info3" class="info">
          <div class="infoTitulo">Rango horario:</div>
          <div id="infoTexto">15:00 - 15:30</div>
        </div>
      </div>
      <div id="boton-cont">
        <div id="boton" @click="marcarVisto">
          <div id="icono">
            <i id="check" class="fa-solid fa-square-check"></i>
          </div>
          <div id="texto">Alerta vista</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: [String, Number],
    fecha: String,
    alertas: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    marcarVisto() {
      this.$emit('marcarVisto', Number(this.id))
      this.$emit('cerrarAlertaIndividual')
    }
  }
}
</script>


<style scoped>
#contenedor {
    width: 450px;
    height: 480px;
    background-color: #48497a;
    border-radius: 25px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25);
}

#superior {
    height: 20%;
    text-align: center;
    padding-top: 15px;
    font-size: 23px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

#fecha {
    font-size: 20px;
}

#textoCont {
    width: 85%;
    padding-left: 75px;
    font-size: 35px;
}

#cruzCont {
    width: 15%;
    font-size: 34px;
    justify-items: left;
    cursor: pointer;
}

#inferior {
    height: 80%;
}

#info-cont {
    height: 70%;
}

.info {
    display: flex;
    justify-content: space-between;
    padding: 0 10px 0 10px;
    height: 28%;
    border-radius: 10px;
    align-items: center;
    font-size: 18px;
    margin: 10px 20px 0 20px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25);
}

#info1 {
    background-color: #3f3f77;
}

#info2 {
    background-color: #343467;
}

#info3 {
    background-color: #282963;
}

.infoTitulo,
#boton {
    color: #9495ab;
}

#boton-cont {
    height: 27%;
    align-content: center;
    justify-items: center;
}

#boton {
    width: 50%;
    height: 60%;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2a2957;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
    margin-bottom: 20px;
}

#texto {
    width: 70%;
    font-size: 24px;
    text-align: center;
}

#icono {
    width: 30%;
    text-align: right;
    font-size: 37px;
    padding-right: 5px;
}

#boton:hover {
    background-color: #2b2a63;
}

#cruzContorno {
    height: 50px;
    width: 50px;
    border-radius: 100px;
    margin-right: 20px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
</style>
