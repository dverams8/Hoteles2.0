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
                <div :id="'contenedor1'" :class="alertas[0].visto ? 'visto' : 'noVisto'"
                    @click="abrirAlertaIndividual(alertas[0])">
                    <div class="AlertaIcono">
                        <i id="iconoAlerta" class="fa-solid fa-circle-exclamation" style="color: #9f0101;"></i>
                    </div>
                    <div id="alerta1" class="alerta">
                        <div class="alertaTexto">{{ alertas[0].texto }}</div>
                        <div class="AlertaFecha">{{ alertas[0].fecha }}</div>
                    </div>
                </div>
                <div :id="'contenedor2'" :class="alertas[1].visto ? 'visto' : 'noVisto'"
                    @click="abrirAlertaIndividual(alertas[1])">
                    <div class="AlertaIcono">
                        <i id="iconoAlerta" class="fa-solid fa-circle-exclamation" style="color: #9f0101;"></i>
                    </div>
                    <div id="alerta2" class="alerta">
                        <div class="alertaTexto">{{ alertas[1].texto }}</div>
                        <div class="AlertaFecha">{{ alertas[1].fecha }}</div>
                    </div>
                </div>
                <div :id="'contenedor3'" :class="alertas[2].visto ? 'visto' : 'noVisto'"
                    @click="abrirAlertaIndividual(alertas[2])">
                    <div class="AlertaIcono">
                        <i id="iconoAlerta" class="fa-solid fa-circle-exclamation" style="color: #9f0101;"></i>
                    </div>
                    <div id="alerta3" class="alerta">
                        <div class="alertaTexto">{{ alertas[2].texto }}</div>
                        <div class="AlertaFecha">{{ alertas[2].fecha }}</div>
                    </div>
                </div>
                <div :id="'contenedor4'" :class="alertas[3].visto ? 'visto' : 'noVisto'"
                    @click="abrirAlertaIndividual(alertas[3])">
                    <div class="AlertaIcono">
                        <i id="iconoAlerta" class="fa-solid fa-triangle-exclamation" style="color: #FFD43B;"></i>
                    </div>
                    <div id="alerta4" class="alerta">
                        <div class="alertaTexto">{{ alertas[3].texto }}</div>
                        <div class="AlertaFecha">{{ alertas[3].fecha }}</div>
                    </div>
                </div>
                <div :id="'contenedor5'" :class="alertas[4].visto ? 'visto' : 'noVisto'"
                    @click="abrirAlertaIndividual(alertas[4])">
                    <div class="AlertaIcono">
                        <i id="iconoAlerta" class="fa-solid fa-triangle-exclamation" style="color: #FFD43B;"></i>
                    </div>
                    <div id="alerta5" class="alerta" @click="abrirAlertaIndividual(alertas[4])">
                        <div class="alertaTexto">{{ alertas[4].texto }}</div>
                        <div class="AlertaFecha">{{ alertas[4].fecha }}</div>
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
        <AlertaIndividual :id-alerta="alertaSeleccionada.id" :alertas="alertas"
            @cerrarAlertaIndividual="cerrarAlertaIndividual" @marcarVisto="marcarUnaComoVista" />
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
                { id: 2, texto: 'Incremento del consumo de gas inesperado', fecha: '24/04/2025', visto: true },
                { id: 3, texto: 'Superación de la media mensual de agua', fecha: '12/02/2025', visto: false },
                { id: 4, texto: 'Mantenimiento en la planta.', fecha: '02/02/2025', visto: true },
                { id: 5, texto: 'Instalación del suelo radiante', fecha: '07/11/2024', visto: false }
            ]
        }
    },
    methods: {
        marcarVisto() {
            this.alertas.forEach(alerta => alerta.visto = true)
        },
        
        marcarUnaComoVista(id) {
            const alerta = this.alertas.find(a => a.id === id)
            if (alerta) {
                alerta.visto = true
            }
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

#alertas>div {
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 2px solid #807b9d;
    cursor: pointer;
}

#alertas>div:hover {
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