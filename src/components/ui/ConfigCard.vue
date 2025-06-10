<template>
    <div id="contenedor">
        <div id="superior">
            <div id="titulo"> Habitacion 101 {{ name }}</div>
            <div id="cruz"><i id="iconoCruz" class="fa-solid fa-xmark"></i></div>
        </div>
        <div id="inferior">
            <div id="opciones">
                <div id="nombre">
                    <div class="opciones-texto">Nombre de la habitación:</div>
                    <input class="menu" type="text" placeholder= "Habitacion 101" />
                </div>
                <div id="estado">
                    <div class="opciones-texto">Estado de la habitación:</div>
                    <div class="menu"></div>
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
            <div id="informe">
                <input type="text" placeholder="Escriba su texto aqui...">
            </div>
            <div id="botones">
                <div id="enviar">
                    <div class="boton-texto"></div>
                    <div class="boton-icono"></div>
                </div>
                <div id="guardar">
                    <div class="boton-texto"></div>
                    <div class="boton-icono"></div>
                </div>
            </div>
            <div id="mensaje">El informe se ha enviado correctamente</div>
        </div>
    </div>
</template>

<style scoped>
    #contenedor {
        width: 600px;
        height: 900px;
        background-color: #191740;
        border-radius: 20px;
        margin: 100px;
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
        margin-left:20px;
        font-size: 30px;
        color: white;
    }

    #opciones {
        margin-top: 20px;
    }

    #nombre, #estado {
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
    }

    #datos {
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: space-between;
    }

    #luz, #agua, #gas {
        width: 32%; 
        background-color: #313057;
        border-radius: 20px;
        padding: 10px;
        justify-items: center;
    }

    .datos-texto {
        font-size: 17px ;
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


    #gas-icon, #agua-icon, #rayo-icon {
        font-size: 60px;
        padding: 0;
    }

    #informe {
        width: 100%;
        height: 200px;
        background-color: #313057;
        border-radius: 20px;
        margin-top: 20px;
        padding: 10px;
    }

    #informe > input {
        background-color: #30304c;
    }

    #informe-texto {
        justify-self: center;
        font-size: 20px;
        margin-top: 15px;
    }






</style>