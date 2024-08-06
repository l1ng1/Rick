<template>
    <div>
        <div class="btns">
            <button @click="pastPage">Prev</button>
            <p>{{ this.store.locationPg }} / {{ this.store.totalLocPages }}</p>
            <button @click="nextPage">Next</button>
        </div>
    
        <div class="locs">
            <div class="location" v-for="(item,index) in locals" :key="index">
                <RouterLink to="/currentLocation" @click="()=>{this.store.setCurrLoc(item)}">
                <p>{{ item.name }}</p>
                <p>{{ item.dimension }}</p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { useMainStore } from '../stores/counter';
export default {
    data() {
        return{
            store:useMainStore(),
            locals:[],
        }
    },
    created(){
        this.getLocals();
    },
    methods:{
        getLocals(){
            this.store.getLocations();
            setTimeout(()=>{this.locals = this.store.getCurrList},100)
        },
        nextPage(){
            this.store.locPgPlus();
            this.getLocals();
        },
        pastPage(){
            this.store.locPgMinus();
            this.getLocals();
        }


    },

}
</script>
<style scoped>
.locs{
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.location a{
    text-decoration: none;
    color: rgb(0, 0, 0);
}

.location{
    width: 15%;
    background-color: rgba(97, 97, 97, 0.701);
    margin: 10px;
    padding: 10px;
    font-size: 20px;
    border-radius: 6px;
    text-align: center;
    transition: all 0.25s;
}

.location:hover{
    background-color: rgba(132, 132, 132, 0.701);
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