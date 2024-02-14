<script setup>
import { ref } from 'vue';

const props = defineProps({
  item: Object,
  index: Number
})
const emit = defineEmits(['eliminarItem', 'editarItem'])

const prioridades = {
  baja: '🟢',
  media: '🟡',
  alta: '🔴'
}

const handleDeleteClick = () => {
  emit('eliminarItem', props.index)
}
const handleEditClick = () => {
  isEditing.value = !isEditing.value
  // isEditing.value = true
}
const isEditing = ref(false)

const editedItem = ref({
  producto: props.item.producto,
  prioridad: props.item.prioridad
})
const handleSaveClick = () => {
  emit('editarItem', props.index, editedItem.value)
  isEditing.value = false
  console.log(editedItem.value)
}

</script>

<template>
  <article>

    <div class="nombre">
      <p v-if="!isEditing">{{ props.index + 1 }} - {{ props.item.producto }}</p>
      <div v-else><input type="text" v-model="editedItem.producto" :placeholder="props.item.producto"></div>
    </div>
    <div class="resto">
      <p v-if="!isEditing">{{ prioridades[props.item.prioridad] }}</p>
      <div v-else>
        <select name="priority" v-model="editedItem.prioridad">
          <option value="baja">🟢</option>
          <option value="media">🟡</option>
          <option value="alta">🔴</option>
        </select>
      </div>
    </div>
    <div class="resto">
      <div v-if="!isEditing">
        <button @click="handleDeleteClick"> 
          <font-awesome-icon icon="trash-can" />
        </button>

        <button @click="handleEditClick">
          <font-awesome-icon icon="user-pen" />
        </button>
      </div>
      <div v-else>
        <button @click="handleSaveClick">Guardar</button>
      </div>
    </div>
  </article>
</template>

<style scoped>
article {
  width: auto;
  display: flex;
  align-items: center;
}

.nombre {
  width: 60%;
}

.resto {
  width: 20%;
}
</style>