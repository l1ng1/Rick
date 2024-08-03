<template>
    <div class="card">
        <button class="back" @click="()=>{this.$router.go(-1)}">Back</button>
        <h1>{{ epis.name }}</h1>
        <h2>Release date: {{ epis.air_date }}</h2>
        <h2>Characters:</h2>
        <div class="chars">
            <div class="char" v-for="(item,index) in chars" :key="index">
                <RouterLink to="/currentCharacter" @click="()=>{this.store.setCurrChar(item)}">
                    <img :src="item.image" alt="">
                    {{item.name}}
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
            epis:[],
            chars:[],
        }
    },
    async created(){  
        this.epis = this.store.getCurrEpisode;
        console.log(this.epis);
        let a = await this.store.getCharByUrl(this.epis.characters);
        this.chars = a;
    }
}
</script>


<style scoped>

.back{
    border: 1px black solid;
    padding: 4px 8px;
    font-size: 20px;
    background-color: white;
}


.card{
    width: 70%;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    background-color: rgba(128, 128, 128, 0.258);
    padding:10px 0px;
}

.chars{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.char{
    display: flex;
    flex-direction: column;
    width: 25%;
    margin: 10px;
    transition: all 0.25s;
    padding: 20px;
}


.char img{
    width: 100%;
    border-radius: 100%;    
}
.char a{
    text-decoration: none;
    color: black;
}


.char:hover{
    background-color: rgba(121, 121, 121, 0.54);
}

</style>