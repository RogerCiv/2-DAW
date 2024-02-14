<script setup>
import {  ref } from 'vue';
const emit = defineEmits(["agregarItem"]);
const item=ref('')
const priority=ref('')

const handleClick = () => {
    const nuevoProducto = {
        productos: item.value,
        prioridad: priority.value
    }
    emit("agregarItem", nuevoProducto);
    item.value = "";
    priority.value = "";
}
</script>


<template>
    <section>
        <h4>Nuevo Item</h4>
        <input type="text" placeholder="Agua" v-model="item" autofocus>
        <select name="priority" v-model="priority" id="priority">
            <option value="">prioridad</option>
            <option value="baja">🟢 - baja</option>
            <option value="media">🟡 - media</option>
            <option value="alta">🔴 - alta</option>
        </select>
        <button @click="handleClick" v-show="item && priority">
            <font-awesome-icon icon="fa-plus" />
        </button>
    </section>
</template>

<style scoped>
input,select{
    font-family: 'Roboto', sans-serif;
    background-color: black;
    border-radius: 4px;
    font-size: 1.4rem;
    color: white;
    width: 40%;
    margin-right: 10px;
}

</style>