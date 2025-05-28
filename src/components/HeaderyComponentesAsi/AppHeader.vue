<template>
    <div id="header">
        <div id="botonesIzquierda">
            <i id="flecha" class="fa-solid fa-arrow-left"></i>
            <i id="casa" class="fa-solid fa-house"></i>
        </div>
        <div id="titulo">
            Hoteles
        </div>
        <div id="botonesDerecha">
            <i id="mas" class="fa-solid fa-plus"></i>
        </div>
    </div>
</template>

<style scoped>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /*Header*/

    #header {
        display: flex;
        height: 100px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        background-color: #201444;
    }

    /*Botones*/

    #botonesIzquierda {
        display: flex;
        justify-content: space-between;
        width: 110px;
        margin-left: 30px;
        align-items: center;
    }

    #flecha {
        font-size: 45px;
    }

    #casa {
        font-size: 35px;
    }

    #botonesDerecha {
        width: 110px;
        text-align: center;
        margin-right: 30px;
    }

    #mas {
        font-size: 35px;
    }

    /*Titulo*/

    #titulo {
        font-size: 40px;
        font-family: sans-serif;
    }

</style>
