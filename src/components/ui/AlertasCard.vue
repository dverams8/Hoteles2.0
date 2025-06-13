<template>
    <div ref="contenedor" id="alertasCont">
        <div id="parteSuperior">
            <div id="titulo">{{ name }}</div>
            <div id="cruz" @click="$emit('ocultarAlertaEvento')">
                <i id="iconoCruz" class="fa-solid fa-xmark"></i>
            </div>
        </div>
        <div id="parteInferior">
            <div id="alertas">
                <div
                    v-for="alerta in alertas"
                    :key="alerta.id"
                    :id="'contenedor' + alerta.id"
                    :class="alerta.visto ? 'visto' : 'noVisto'"
                    @click="abrirAlertaIndividual(alerta)"
                >
                    <div class="AlertaIcono">
                        <i
                            id="iconoAlerta"
                            class="fa-solid"
                            :class="alerta.id <= 3 ? 'fa-circle-exclamation' : 'fa-triangle-exclamation'"
                            :style="{ color: alerta.id <= 3 ? '#9f0101' : '#FFD43B' }"
                        ></i>
                    </div>
                    <div :id="'alerta' + alerta.id" class="alerta">
                        <div class="alertaTexto">{{ alerta.texto }}</div>
                        <div class="AlertaFecha">{{ alerta.fecha }}</div>
                    </div>
                </div>
            </div>
            <div class="boton" @click="marcarVisto">
                <div class="botonIcono">
                    <i id="iconoVisto" class="fa-regular fa-square-check" style="color: #9595aa;"></i>
                </div>
                <div class="botonTexto">Marcar todo como visto</div>
            </div>
        </div>
    </div>
    <div ref="alertaIndividualRef" id="alertaIndividual">
        <AlertaIndividual
            :id="alertaSeleccionada.id"
            :alertas="alertas"
            @cerrarAlertaIndividual="cerrarAlertaIndividual"
            @marcarVisto="marcarUnaComoVista"
        />
    </div>
</template>

<script>
import AlertaIndividual from './AlertaIndividual.vue'

export default {
    components: { AlertaIndividual },
    props: ['name'],
    data() {
        return {
            alertaSeleccionada: {
                id: '',
                fecha: ''
            },
            alertas: [
                { id: 1, texto: 'Superación de consumo máximo', fecha: '15/05/2025', visto: false },
                { id: 2, texto: 'Incremento del consumo de gas inesperado', fecha: '24/04/2025', visto: false },
                { id: 3, texto: 'Superación de la media mensual de agua', fecha: '12/02/2025', visto: false },
                { id: 4, texto: 'Mantenimiento en la planta.', fecha: '02/02/2025', visto: false },
                { id: 5, texto: 'Instalación del suelo radiante', fecha: '07/11/2024', visto: false },
            ]
        }
    },
    methods: {
        marcarVisto() {
            this.alertas = this.alertas.map(alerta => ({ ...alerta, visto: true }))
        },

        marcarUnaComoVista(id) {
            this.alertas = this.alertas.map(alerta =>
                alerta.id === id ? { ...alerta, visto: true } : alerta
            )
        },

        abrirAlertaIndividual(alerta) {
            this.alertaSeleccionada = {
                id: alerta.id,
                fecha: alerta.fecha
            }
            this.$refs.alertaIndividualRef.style.display = 'flex'
            this.$refs.contenedor.style.filter = 'blur(30px)'
        },

        cerrarAlertaIndividual() {
            this.$refs.alertaIndividualRef.style.display = 'none'
            this.$refs.contenedor.style.filter = ''
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

#iconoCruz,
#iconoAlerta,
#iconoVisto {
    font-family: "Font Awesome 6 Free";
    color: white;
}

#iconoCruz {
    font-size: 25px;
}

#iconoAlerta {
    font-size: 30px;
}

#iconoVisto {
    font-size: 40px;
}

#titulo {
    color: white;
}

#alertasCont {
    width: 25%;
    height: 700px;
    background-color: #201444;
    border-radius: 20px;
    padding-left: 15px;
    padding-right: 15px;
    box-shadow: 0 10px 12px rgba(0, 0, 0, 0.18);
}

#parteSuperior {
    border-bottom: 2px solid white;
    text-align: center;
    padding: 20px;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
}

#titulo {
    flex: 1;
    text-align: center;
    margin: 0;
}

#parteInferior {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
}

.alerta {
    margin-top: 15px;
    padding: 10px;
}

.AlertaIcono {
    align-items: center;
}

.alerta {
    margin-bottom: 15px;
    margin-left: 5px;
}

#alertas > div {
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid #807b9d;
    cursor: pointer;
}

#alertas > div:hover {
    background-color: #281955;
}

.visto {
    color: #535171;
}

.noVisto {
    color: white;
}

.boton {
    width: 300px;
    height: 60px;
    margin: 50px auto 0 auto;
    border-radius: 20px;
    background-color: #2a2856;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
    transition: box-shadow 0.1s ease, background-color 0.3s ease;
    color: #535171;
    cursor: pointer;
}

.boton:hover {
    background-color: #312e62;
    box-shadow: 0 8px 2400px rgba(0, 0, 0, 0.22);
}

#cruz {
    cursor: pointer;
}

#alertaIndividual {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 9999;
}
</style>
