<script setup>
import { ref } from 'vue';
import EncabezadoComponente from './components/EncabezadoComponente.vue';
import ListaItems from './components/ListaItems.vue';
import PieComponente from './components/PieComponente.vue';
import NuevoItem from './components/NuevoItem.vue';

let listado = ref([
  {
    productos: "Pan",
    prioridad: "baja"
  },
  {
    productos: "Leche",
    prioridad: "media"
  },
  {
    productos: "Manzanas",
    prioridad: "alta"
  }
])

const pushear = (nuevo) => {
  listado.value.push(nuevo)
}

</script>

<template>
  <EncabezadoComponente/>
  <ListaItems :mis-compras="listado"/>
  <NuevoItem @agregar-item="pushear"/>
  <PieComponente/>
  
</template>

<style scoped>

</style>
