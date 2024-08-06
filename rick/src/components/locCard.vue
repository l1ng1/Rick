<template>
    <div class="locationCard">
        <h1>{{ location.name }}</h1>
        <h2>Dimension: {{ location.dimension }}</h2>
        <p>Type: {{ location.type }}</p>
        <br>
        <br>
        <button @click="()=>{this.$router.go(-1)}">Back</button>
        <br><br>
        <div class="residents">
            <div class="resident" v-for="(item,index) in residents" :key="index">
                <RouterLink to="/currentCharacter" @click="()=>{this.store.setCurrChar(item)}">
                    <img :src="item.image">
                    <p>{{ item.name }}</p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';
import { useMainStore } from '@/stores/counter';
export default {
    data() {
        return{
            store:useMainStore(),
            location:[],
            residents:[],
        }
    },
    async created(){
        this.location = this.store.getCurrLocation;
        this.residents = await this.store.getCharByUrl(this.location.residents);
    },
}
</script>
<style scoped>


.locationCard{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.residents{
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.resident{
    width: 25%;
    margin: 10px;
    text-align: center;
    padding: 10px;
    font-size: 20px;
    transition: all 0.25s;
}
.resident a{
    text-decoration: none;
    color: black;
}

.resident:hover{
    background-color: rgba(128, 128, 128, 0.483);
}



.resident img{
    width: 100%;
    border-radius: 100%;
}

.locationCard button{
    border: none;
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.25s;
    background-color: white;
    border: 1px black solid;
}

.locationCard button:hover{
    background-color: rgba(156, 156, 156, 0.626);
}

</style>