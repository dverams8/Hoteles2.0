<template>
    <div ref="contenedor" id="contenedor">
        <div id="superior">
            <div id="titulo">{{ localName }}</div>
            <div id="cruz" @click="$emit('ocultarConfigEvento')"><i id="iconoCruz" class="fa-solid fa-xmark"></i></div>
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
                        <div id="barra-luz" class="barra"></div>
                        <div class="barra-info">90%</div>
                    </div>
                    <div class="info">100kW / 222kW</div>
                    <div class="limite">Nuevo límite</div>
                </div>
                <div id="agua">
                    <div class="datos-texto">Agua</div>
                    <div class="datos-icono"><i id="agua-icon" class="fa-solid fa-droplet"></i></div>
                    <div class="barra-cont">
                        <div id="barra-agua" class="barra"></div>
                        <div class="barra-info">35%</div>
                    </div>
                    <div class="info">100L / 196L</div>
                    <div class="limite">Nuevo Límite</div>
                </div>
                <div id="gas">
                    <div class="datos-texto">Gas</div>
                    <div class="datos-icono"><i id="gas-icon" class="fa-solid fa-fire-flame-curved"></i></div>
                    <div class="barra-cont">
                        <div id="barra-gas" class="barra"></div>
                        <div class="barra-info">63%</div>
                    </div>
                    <div class="info">100m³ / 125m³</div>
                    <div class="limite">Nuevo límite</div>
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
    </div>
</template>

<script>
export default {
    props: ['name', 'estado'],
    data() {
        return {
            localName: this.name,
            mensaje: '',
            mostrarMensaje: false,
            estadoSeleccionado: this.estadoToValue(this.estado)
        }
    },
    watch: {
        name(nuevoValor) {
            this.localName = nuevoValor
        },
        estado(nuevoEstado) {
            this.estadoSeleccionado = this.estadoToValue(nuevoEstado)
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
            this.$emit('GuardarInforme', {
                nombre: this.localName,
                estado: Number(this.estadoSeleccionado)
            })
            setTimeout(() => {

                this.mensaje = 'El informe se ha guardado correctamente'
                this.mostrarMensaje = true
                setTimeout(() => {
                    this.mostrarMensaje = false
                }, 5000)
            }, 100)

        },

        enviarInforme() {
            this.mensaje = 'El informe se ha enviado correctamente'
            this.mostrarMensaje = true
            setTimeout(() => {
                this.mostrarMensaje = false
            }, 5000)
        }
    }
}
</script>

<style scoped>
#contenedor {
    width: 600px;
    height: 1010px;
    background-color: #191740;
    border-radius: 20px;
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
    font-size: 17px;
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