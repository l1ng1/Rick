<template>
    <div>
    <div class="listOfEpis">
        <div class="epis" v-for="(item,index) in list" :key="index">
            <RouterLink to="/currentEpisode" @click="this.store.setCurrEpisode(item)">
            <p>{{item.name}}</p>
        </RouterLink>
        </div>
    </div>
    <div class="navigation">
         
    </div>
</div>

</template>



<script>
import { useMainStore } from '@/stores/counter';
import { RouterLink } from 'vue-router';
export default {
    data() {
        return{
            store:useMainStore(),
            list:[]
        }        
    },
    created(){
        this.store.getEpisodes();
        setTimeout(()=>{this.list = this.store.getCurrList},100)
    }
}
</script>



<style scoped>
.listOfEpis{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.epis{
    cursor: pointer;
    padding: 2px 10px;
    font-size: 24px;
    width: 100%;
    background-color: rgb(195, 195, 195);
    border-bottom: 1px rgb(72, 72, 72) solid;
    transition: all 0.25s;
}
.epis a{
    text-decoration: none;
    color: black;
}

.epis:hover{
    background-color: rgb(170, 170, 170);
}


</style>