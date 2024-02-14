<script setup>
const props = defineProps({
	item: Object,
	index: Number
})
	const prioridades = {
	  "baja": '🟢',
	  "media": '🟡', 
	  "alta": '🔴' 
	}

</script>

<template>
	<article>

		<div class="nombre">
			<p>{{  props.index + 1 }} - {{ props.item.productos }}</p>
		</div>
		<div class="resto">
			<p>{{  prioridades[props.item.prioridad] }}</p>
		</div>
		<div class="resto">
			<button> <font-awesome-icon icon="trash-can" /></button>
			<button><font-awesome-icon icon="user-pen" /></button>
		</div>
	</article>
</template>

<style scoped>
article{
	width: auto;
	display: flex;
	align-items: center;
}
.nombre{
	width: 60%;
}

.resto{
	width: 20%;
}
.green-dot {
	height: 10px;
	width: 10px;
	background-color: #00ff00;
	border-radius: 50%;
	display: inline-block;
}
.red-bar {
			height: 25px;
			width: 15px;
			background-color: #ff0000;
			display: inline-block;
		}
</style>