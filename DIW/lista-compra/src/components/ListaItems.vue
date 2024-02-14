<script setup>
import ItemIndividual from './ItemIndividual.vue';
const props = defineProps({
    misCompras: Array
    })

    const emit = defineEmits(['eliminarItem', 'editarItem'])

    const eliminar = (index) =>{
        emit('eliminarItem', index)
    }

    const editar = (index, edited) =>{
        emit('editarItem', index,edited)
    }
</script>


<template>
  <section class="items">
    <ItemIndividual v-for="(item,index) of props.misCompras" 
    :key="index" 
    :item="item" 
    :index="index" 
    @eliminar-item="eliminar" 
    @editar-item="editar"/>+
  </section>
</template>

<style scoped>
.items{
    width: 480px;
    max-width: 100%;
    padding: 0;
    margin: 0;
}
</style>