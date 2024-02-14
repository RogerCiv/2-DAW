<script setup>
import ItemIndividual from './ItemIndividual.vue';
const props = defineProps({
    misCompras: Array
    })
</script>


<template>
  <section class="items">
    <ItemIndividual v-for="(item,index) of props.misCompras" :key="index" :item="item" :index="index"/>+
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