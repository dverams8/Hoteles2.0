<template>
    <div id="contenedor">
        <div id="superior">
            <div id="titulo">Nuevo límite</div>
            <div id="cruz" @click="$emit('cerrar')">
                <i id="iconoCruz" class="fa-solid fa-xmark"></i>
            </div>
        </div>
        <div id="inferior">
            <input type="number" class="menu" v-model.number="nuevoLimite" :placeholder="limiteActual" />
            <div id="botonGuardar" @click="clickGuardar">Guardar</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['tipo', 'limiteActual'],
    data() {
        return {
            nuevoLimite: this.limiteActual
        }
    },
    methods: {
        clickGuardar() {
            if (this.nuevoLimite > 0) {
                this.$emit('guardar', this.nuevoLimite)
            }
        }
    }
}
</script>

<style scoped>
#contenedor {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #2b2857;
    border-radius: 15px;
    width: 320px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
    color: white;
    z-index: 1000;
}

#superior {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid white;
}

#titulo {
    font-size: 22px;
}

#cruz {
    cursor: pointer;
}

#inferior {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.menu {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    background-color: #464459;
    color: white;
}

#botonGuardar {
    background-color: #5f71b8;
    padding: 14px;
    text-align: center;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#botonGuardar:hover {
    background-color: #768be0;
}
</style>
