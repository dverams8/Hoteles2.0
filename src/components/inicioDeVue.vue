<template>
    <div class="myComponent">
        <!-- <h1 v-if="isVisible">{{ message }}</h1>
        <button v-on:click="$event => isVisible = !isVisible">Toca</button>-->
        <p> {{ mensaje }}</p>
        <input v-model="mensaje">
    </div>
</template>

<script>
export default{
    name:'myComponent',
    data(){
        return{
            // message: 'Hello world en vue!',
            // isVisible: true
            mensaje: 'Hola'
        }
    }
}</script>