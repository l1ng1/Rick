
<template>
  <div class="cont">
      <headerCompVue></headerCompVue>
      <RouterView />
  </div>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import headerCompVue from './components/headerComp.vue'
export default {
    data() {
        return{
            
        }
    },
    components:{
      headerCompVue,
    }
}


</script>


<style scoped>

.cont{
  width: 1100px;
  margin: 0 auto;
}


</style>
