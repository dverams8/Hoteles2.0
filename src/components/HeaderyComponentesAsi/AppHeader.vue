<template>
    <div id="header">
        <div id="botonesIzquierda">
            <router-link to="../">
                <i id="flecha" class="fa-solid fa-arrow-left"></i>
            </router-link>
            <router-link to="/hoteles">
                <i id="casa" class="fa-solid fa-house"></i>
            </router-link>

        </div>
        <div id="titulo">
            {{ titulo }}
        </div>
        <div id="botonesDerecha">
            <i id="mas" class="fa-solid fa-plus"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            titulo: {
                type: String,
                default: 'Hoteles'
            }
        }
    }
</script>

<style scoped>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #header {
        display: flex;
        height: 100px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        background-color: #201444;
    }

    #botonesIzquierda {
        display: flex;
        justify-content: space-between;
        width: 110px;
        margin-left: 30px;
        align-items: center;
    }

    #flecha,
    #casa {
        color: white;   
        transition: none;
    }

    #flecha:hover, #casa:hover {
        color: rgb(215, 215, 215);
        cursor: pointer;
}

    #flecha {
        font-size: 45px;
        text-decoration: none;
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
