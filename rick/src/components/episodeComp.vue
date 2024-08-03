<template>
    <div>
        <br><br>
        <div class="btns">
            <button @click="pastPage">Prev</button>
            <p>{{ this.store.episPg }} / {{ this.store.totalEpisPages }}</p>
            <button @click="nextPage">Next</button>
        </div>
        <br><br>
    <div class="listOfEpis">
        <div class="epis" v-for="(item,index) in list" :key="index">
            <RouterLink to="/currentEpisode" @click="this.store.setCurrEpisode(item)">
            <p>{{item.name}}</p>
        </RouterLink>
        </div>
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
        this.getItems()
    },
    methods:{
        getItems(){
            this.store.getEpisodes();
            setTimeout(()=>{this.list = this.store.getCurrList},100)
        },
        nextPage(){
            this.store.EpisPgPlus();
            this.getItems();
        },
        pastPage(){
            this.store.EpisPgMinus();
            this.getItems();
        }
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


.btns{
    display: flex;
    width: 20%;
    margin: 0 auto;
    justify-content: space-between;
}

.btns button{
    background-color: black;
    color: white;
    font-size: 24px;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    transition: all 0.25s;
}
.btns button:hover{
    background-color: rgb(66, 66, 66);
}


</style>