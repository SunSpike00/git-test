<template>
    <!-- 자식 컴포넌트의 템플릿 components/ClassChild.vue 생성 -->
    <q-card-section :class="{foo:true, bar:true}">안녕!</q-card-section>
</template>

<script>
export default {

}
</script>

<style>
	.foo {
	  background-color: red;
	  color:white;
	}
	.bar{
	  color:white;
	}
</style>