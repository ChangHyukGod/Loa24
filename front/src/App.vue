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
@import url('https://fonts.googleapis.com/css2?family=Dongle&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
</style>
