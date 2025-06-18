<template>
    <div ref="contenedor" id="contenedor">
        <div id="superior">
            <div id="titulo">{{ localName }}</div>
            <div id="cruz" @click="$emit('ocultarConfigEvento')">
                <i id="iconoCruz" class="fa-solid fa-xmark"></i>
            </div>
        </div>

        <div id="inferior">
            <div id="opciones">
                <div id="nombre">
                    <div class="opciones-texto">Nombre de la habitación:</div>
                    <input class="menu" type="text" v-model="localName" :placeholder="name" />
                </div>
                <div id="estado">
                    <div class="opciones-texto">Estado de la habitación:</div>
                    <select id="menuDesplegable" class="menu" v-model="estadoSeleccionado">
                        <option value="1">Disponible</option>
                        <option value="2">Ocupada</option>
                        <option value="3">En Mantenimiento</option>
                        <option value="4">Reservada</option>
                    </select>
                </div>
            </div>

            <div id="datos">
                <div id="luz">
                    <div class="datos-texto">Consumo</div>
                    <div class="datos-icono"><i id="rayo-icon" class="fa-solid fa-bolt"></i></div>
                    <div class="barra-cont">
                        <div id="barra-luz" class="barra" :style="{ width: porcentajeLuz + '%' }"></div>
                        <div class="barra-info">{{ porcentajeLuz }}%</div>
                    </div>
                    <div class="info">{{ limites.luz.actual }}kW / {{ limites.luz.valor }}kW</div>
                    <div class="limite" @click="abrirModal('luz')">Nuevo límite</div>
                </div>

                <div id="agua">
                    <div class="datos-texto">Agua</div>
                    <div class="datos-icono"><i id="agua-icon" class="fa-solid fa-droplet"></i></div>
                    <div class="barra-cont">
                        <div id="barra-agua" class="barra" :style="{ width: porcentajeAgua + '%' }"></div>
                        <div class="barra-info">{{ porcentajeAgua }}%</div>
                    </div>
                    <div class="info">{{ limites.agua.actual }}L / {{ limites.agua.valor }}L</div>
                    <div class="limite" @click="abrirModal('agua')">Nuevo límite</div>
                </div>

                <div id="gas">
                    <div class="datos-texto">Gas</div>
                    <div class="datos-icono"><i id="gas-icon" class="fa-solid fa-fire-flame-curved"></i></div>
                    <div class="barra-cont">
                        <div id="barra-gas" class="barra" :style="{ width: porcentajeGas + '%' }"></div>
                        <div class="barra-info">{{ porcentajeGas }}%</div>
                    </div>
                    <div class="info">{{ limites.gas.actual }}m³ / {{ limites.gas.valor }}m³</div>
                    <div class="limite" @click="abrirModal('gas')">Nuevo límite</div>
                </div>
            </div>

            <div id="informe-texto">Informe de avería:</div>
            <textarea id="informe" class="informe" placeholder="Escriba su texto aquí..."></textarea>

            <div id="botones">
                <div id="enviar" @click="enviarInforme">
                    <div class="boton-icono"><i id="enviar-icon" class="fa-solid fa-paper-plane"></i></div>
                    <div class="boton-texto">Enviar</div>
                </div>
                <div id="guardar" @click="guardarInforme">
                    <div class="boton-icono"><i id="guardar-icon" class="fa-solid fa-floppy-disk"></i></div>
                    <div class="boton-texto">Guardar</div>
                </div>
            </div>

            <div id="mensaje" v-if="mostrarMensaje">{{ mensaje }}</div>
        </div>

        <NuevoLimite v-if="mostrarModal" :tipo="tipoRecursoSeleccionado"
            :limiteActual="limites[tipoRecursoSeleccionado].valor" @guardar="guardarNuevoLimite"
            @cerrar="cerrarModal" />
    </div>
</template>

<script>
import NuevoLimite from './NuevoLimite.vue'

export default {
    components: { NuevoLimite },
    props: ['name', 'estado'],
    data() {
        return {
            localName: this.name,
            estadoSeleccionado: this.estadoToValue(this.estado),
            mensaje: '',
            mostrarMensaje: false,
            limites: {
                luz: { valor: 222, actual: 100 },
                agua: { valor: 196, actual: 100 },
                gas: { valor: 125, actual: 100 }
            },
            mostrarModal: false,
            tipoRecursoSeleccionado: null
        }
    },
    computed: {
        porcentajeLuz() {
            return this.calcularPorcentaje(this.limites.luz.actual, this.limites.luz.valor)
        },
        porcentajeAgua() {
            return this.calcularPorcentaje(this.limites.agua.actual, this.limites.agua.valor)
        },
        porcentajeGas() {
            return this.calcularPorcentaje(this.limites.gas.actual, this.limites.gas.valor)
        }
    },
    methods: {
        estadoToValue(estado) {
            switch (estado) {
                case 'Disponible': return '1'
                case 'Ocupada': return '2'
                case 'En Mantenimiento': return '3'
                case 'Reservada': return '4'
                default: return '1'
            }
        },
        guardarInforme() {
            this.$emit('GuardarInforme', { nombre: this.localName, estado: Number(this.estadoSeleccionado) })
            this.mostrarMensajeTemporal('El informe se ha guardado correctamente')
        },
        enviarInforme() {
            this.mostrarMensajeTemporal('El informe se ha enviado correctamente')
        },
        mostrarMensajeTemporal(texto) {
            this.mensaje = texto
            this.mostrarMensaje = true
            setTimeout(() => (this.mostrarMensaje = false), 5000)
        },
        abrirModal(tipo) {
            this.tipoRecursoSeleccionado = tipo
            this.mostrarModal = true
        },
        cerrarModal() {
            this.mostrarModal = false
            this.tipoRecursoSeleccionado = null
        },
        guardarNuevoLimite(nuevoValor) {
            this.limites[this.tipoRecursoSeleccionado].valor = nuevoValor
            this.cerrarModal()
        },
        calcularPorcentaje(actual, valor) {
            return valor > 0 ? Math.min(100, Math.round((actual / valor) * 100)) : 0
        }
    }
}
</script>

<style scoped>
#contenedor {
    background-color: #191740;
    border-radius: 20px;
    width: 650px;
}

#cruz {
    border-radius: 100px;
    height: 50px;
    width: 50px;
    align-content: center;
    cursor: pointer;
}

#superior {
    border-bottom: 2px solid white;
    text-align: center;
    padding: 20px;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
}

#inferior {
    padding-left: 20px;
    padding-right: 20px;
}

#titulo {
    flex: 1;
    text-align: center;
    margin-left: 20px;
    font-size: 30px;
    color: white;
}

#opciones {
    margin-top: 20px;
}

#nombre,
#estado {
    margin-bottom: 20px;
    font-size: 17px;
    display: flex;
    justify-content: space-between;
}

.menu {
    width: 150px;
    height: 30px;
    border-radius: 10px;
    background-color: #464459;
    border: none;
    font-size: 13px;
    padding-left: 8px;
    color: white;
    cursor: pointer;
}

#datos {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-between;
}

#luz,
#agua,
#gas {
    width: 32%;
    background-color: #313057;
    border-radius: 20px;
    padding: 10px;
    justify-items: center;
}

.datos-texto {
    font-size: 13px;
}

.datos-icono {
    margin-top: 30px;
    width: 130px;
    height: 130px;
    border-radius: 100px;
    background-color: #2b2857;
    align-content: center;
    text-align: center;
}

.barra-cont {
    width: 100%;
    height: 10px;
    background-color: #464459;
    border-radius: 10px;
    margin-top: 20px;
}

.barra {
    height: 10px;
    border-radius: 10px;
    background-color: #5f71b8;
}

#barra-luz {
    width: 90%;
}

#barra-agua {
    width: 35%;
}

#barra-gas {
    width: 63%;
}

.barra-info {
    color: white;
    font-size: 18px;
    justify-self: center;
    margin-top: 10px;
}

.info {
    margin-top: 45px;
    font-size: 20px;
    color: white;
}

.limite {
    width: 85%;
    height: 30px;
    background-color: #2b2857;
    margin-top: 20px;
    border-radius: 10px;
    text-align: center;
    align-content: center;
    font-size: 12px;
}

#gas-icon,
#agua-icon,
#rayo-icon {
    font-size: 60px;
    padding: 0;
}

#informe,
#informe>input {
    width: 100%;
    height: 200px;
    background-color: #313057;
    border-radius: 20px;
    margin-top: 10px;
    padding: 10px;
}

#informe>input {
    background-color: #313057;
    border: none;
    font-size: 13px;
}

#informe-texto {
    justify-self: center;
    font-size: 20px;
    margin-top: 20px;
}

.informe {
    width: 100%;
    height: 150px;
    border-radius: 10px;
    padding: 10px;
    color: white;
    background-color: #464459;
    border: none;
    resize: none;
}

#botones {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
    height: 50px;
}

#enviar,
#guardar {
    width: 30%;
    height: 100%;
    background-color: #2b2857;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

#enviar:hover,
#guardar:hover {
    background-color: #312e6a;
}

#enviar-icon,
#guardar-icon {
    font-size: 20px;
    color: white;
    font-size: 25px;
    margin-right: 15px;
    padding: 0;
}

.boton-texto {
    color: white;
    font-size: 18px;
}

#mensaje {
    text-align: center;
    font-size: 17px;
    color: rgb(51, 255, 0);
    margin-top: 20px;
}
</style>