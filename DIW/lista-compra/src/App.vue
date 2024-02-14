<script setup>
import { ref } from 'vue';
import EncabezadoComponente from './components/EncabezadoComponente.vue';
import ListaItems from './components/ListaItems.vue';
import PieComponente from './components/PieComponente.vue';
import NuevoItem from './components/NuevoItem.vue';

let listado = ref([
  {
    producto: "Pan",
    prioridad: "baja"
  },
  {
    producto: "Leche",
    prioridad: "media"
  },
  {
    producto: "Manzanas",
    prioridad: "alta"
  }
])

const pushear = (nuevo) => {
  listado.value.push(nuevo)
}

const eliminar = (index) =>{
  listado.value.splice(index, 1)
}
const editar = (index, edited) =>{
  listado.value[index]=edited;
}

</script>

<template>
  <EncabezadoComponente/>
  <ListaItems :mis-compras="listado" @eliminar-item="eliminar" @editar-item="editar"/>
  <NuevoItem @agregar-item="pushear"/>
  <PieComponente/>
  
</template>

<style scoped>

</style>
