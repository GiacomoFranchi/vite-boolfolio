<script>
import AppMain from './components/AppMain.vue';

export default{
  data(){
    return{};
  },
  components:{AppMain},
}
</script>
<template>
  <h1>Progetti:</h1>
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

h1{
  text-align: center;
  padding: 1rem 0;
}
</style>