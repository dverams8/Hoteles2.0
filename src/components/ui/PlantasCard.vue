<template>
    <div class="planta-card">
        <h3 id="titulo">
            {{ name }}
        </h3>
        <p class="subtitulo">Cantidad de Habitaciones: {{ habitaciones }}</p>
        <p class="subtitulo">Habitaciones ocupadas: {{ ocupadas }}</p>

        <div id="datos">

            <div id="electricidad-cont">
                <div class="icono">
                    <i id="rayo" class="fa-solid fa-bolt"></i>
                </div>
                <div class="contenido">
                    <div class="titulo-consumo">Consumo electrico</div>
                    <div class="datos-contenido">
                        <div class="actual">
                            <div class="actual-valor">{{ electricNow }}</div>
                            <div class="actual-texto">Consumo actual</div>
                        </div>
                        <div class="mensual">
                            <div class="mensual-valor">{{ electricMensual }}</div>
                            <div class="mensual-texto">Consumo mensual</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="agua-cont">
                <div class="icono">
                    <i id="agua" class="fa-solid fa-droplet"></i>
                </div>
                <div class="contenido">
                    <div class="titulo-consumo">Consumo de agua</div>
                    <div class="datos-contenido">
                        <div class="actual">
                            <div class="actual-valor">{{ waterNow }}</div>
                            <div class="actual-texto">Consumo actual</div>
                        </div>
                        <div class="mensual">
                            <div class="mensual-valor">{{ waterMensual }}</div>
                            <div class="mensual-texto">Consumo mensual</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="gas-cont">
                <div class="icono">
                    <i id="gas" class="fa-solid fa-fire-flame-curved"></i>
                </div>
                <div class="contenido">
                    <div class="titulo-consumo">Consumo de gas</div>
                    <div class="datos-contenido">
                        <div class="actual">
                            <div class="actual-valor">{{ gasNow }}</div>
                            <div class="actual-texto">Consumo actual</div>
                        </div>
                        <div class="mensual">
                            <div class="mensual-valor">{{ gasMensual }}</div>
                            <div class="mensual-texto">Consumo mensual</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    props: ['name', 'habitaciones', 'ocupadas', 'electricNow', 'waterNow', 'gasNow', 'electricMensual', 'waterMensual', 'gasMensual'],
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

.planta-card {
    background: linear-gradient(135deg, #322a80, #3f2f91);
    border-radius: 16px;
    padding: 20px;
    width: 333px;
    height: 450px;
    color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    background-color: #35348b;
    opacity: 1;
    background: linear-gradient(135deg, #464677 25%, transparent 25%) -23px 0/ 46px 46px, linear-gradient(225deg, #464677 25%, transparent 25%) -23px 0/ 46px 46px, linear-gradient(315deg, #464677 25%, transparent 25%) 0px 0/ 46px 46px, linear-gradient(45deg, #464677 25%, #40407b 25%) 0px 0/ 46px 46px;
    margin: 80px;
    margin-top: 15px;
    margin-bottom: 5px;
}

#titulo {
    font-size: 30px;
}

.subtitulo {
    font-size: 13px;
    margin-top: 5px;
    color: #a0a1a0;
}

#electricidad-cont, #agua-cont, #gas-cont {
    display: flex;
    margin-top: 20px;
    padding: 5px;
    border-radius: 15px;
}

#electricidad-cont {
    background-color: #292962;
}

#agua-cont {
    background-color: #292962;
}

#gas-cont {
    background-color: #292962;
}

.icono {
    width: 70px;
    height: 70px; 
    display: flex;
    align-items: center;
    justify-content: center;
}

.contenido {
    width: 100%;
    justify-items: center;
}

.datos-contenido {
    display: flex;
    font-size: 14px;
}

.actual, .mensual {
    justify-items: center;
}

.mensual {
    margin-left: 15px;
}

.actual-texto, .mensual-texto {
    font-size: 12px;
    color: #a0a1a0;
}

.titulo-consumo {
    margin-bottom: 10px;
    color: #a0a1a0;
}

#rayo, #agua, #gas {
    font-size: 40px;
    font-family: "Font Awesome 6 Free";
}

#rayo {
    color: #f0c14b;
}

#agua {
    color: #23bef2;
}

#gas {
    color: #26479a;
}
</style>