<template>
  <!-- 머리말 -->
  <HeaderCom/>
  <!-- 본문 -->
  <router-view/>
</template>
<script>
import HeaderCom from './components/HeaderCom.vue';
export default {
  components:{
    HeaderCom,
  }
};
</script>

<style>

</style>
