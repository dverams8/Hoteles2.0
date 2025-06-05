<template>
    <!-- <div id="contenedor"> -->
        <div id="alertasCont">
            <div id="parteSuperior">
                <div id="titulo">Habitación 101</div>
                <div id="cruz"><i id="iconoCruz" class="fa-solid fa-xmark"></i></div>
            </div>
            <div id="parteInferior">
                <div id="alertas">

                    <div class="contenedor-IconAlerta">
                        <div class="AlertaIcono">
                            <i id="iconoAlerta" class="fa-solid fa-circle-exclamation" style="color: #9f0101;"></i>
                        </div>
                        <div id="alerta1" class="alerta">
                            <div class="alertaTexto">Superación de consumo máximo</div>
                            <div class="AlertaFecha">15/05/2025</div>
                        </div>
                    </div>
                    <div class="contenedor-IconAlerta">
                        <div class="AlertaIcono">
                            <i id="iconoAlerta" class="fa-solid fa-circle-exclamation" style="color: #9f0101;"></i>
                        </div>
                        <div id="alerta2" class="alerta">
                            <div class="alertaTexto">Incremento del consumo de gas inesperado</div>
                            <div class="AlertaFecha">24/04/2025</div>
                        </div>
                    </div>
                    <div class="contenedor-IconAlerta">
                        <div class="AlertaIcono">
                            <i id="iconoAlerta" class="fa-solid fa-circle-exclamation" style="color: #9f0101;"></i>
                        </div>
                        <div id="alerta3" class="alerta">
                            <div class="alertaTexto">Superación de la media mensual de agua</div>
                            <div class="AlertaFecha">12/02/2025</div>
                        </div>
                    </div>
                    <div class="contenedor-IconAlerta">
                        <div class="AlertaIcono">
                            <i id="iconoAlerta" class="fa-solid fa-triangle-exclamation" style="color: #FFD43B;"></i>
                        </div>
                        <div id="alerta4" class="alerta">
                            <div class="alertaTexto">Mantenimiento en la planta.</div>
                            <div class="AlertaFecha">02/02/2025</div>
                        </div>
                    </div>
                    <div class="contenedor-IconAlerta">
                        <div class="AlertaIcono">
                            <i id="iconoAlerta" class="fa-solid fa-triangle-exclamation" style="color: #FFD43B;"></i>
                        </div>
                        <div id="alerta5" class="alerta">
                            <div class="alertaTexto">Instalación del suelo radiante</div>
                            <div class="AlertaFecha">07/11/2024</div>
                        </div>
                    </div>

                </div>
                <div class="boton">
                    <div class="botonIcono">
                        <i id="iconoVisto" class="fa-regular fa-square-check" style="color: #9595aa;"></i>
                    </div>
                    <div class="botonTexto">Marcar todo como visto</div>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<style scoped>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #535171;
        font-family: sans-serif;
    }

    #iconoCruz, #iconoAlerta, #iconoVisto {
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

    #titulo, #alerta1 > .alertaTexto, #alerta1 > .AlertaFecha {
        color: white;
    }

    
    /* #contenedor {
        width: 100%;
        height: 100vh;
        display: flex;
        border: 2px solid red;
        justify-content: center;
    } */

    #alertasCont {
        width: 25%;
        height: 700px;
        border: 2px solid black;
        background-color: #201444;
        border-radius: 20px;
        padding-left: 15px;
        padding-right: 15px;
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
        /* border: 2px solid yellow; */
    }

    .alerta {
        /* border: 2px solid yellow; */
        margin-bottom: 15px;
        margin-left: 5px;
    }

    .contenedor-IconAlerta {
        display: flex;
        align-items: center;
        border-bottom: 2px solid #807b9d;
        /* border: 2px solid red; */
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
    }

    .boton:hover {
        background-color: #312e62;
        box-shadow: 0 8px 2400px rgba(0, 0, 0, 0.22);
    }


</style>