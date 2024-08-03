<template>
    <div>
        <br>
        <br>
        <div class="btns">
            <button @click="pastPage">Prev</button>
            <p>{{ this.store.charPg }} / {{ this.store.totalCharPages }}</p>
            <button @click="nextPage">Next</button>
        </div>
        <br>
        <br>
    <div class="chars">
        <div class="char" v-for="(item,index) in chars" :key="index">
            <RouterLink to="/currentCharacter" @click="()=>{this.store.setCurrChar(item)}">
            <img :src="item.image">
            <h2>{{ item.name }}</h2>
            </RouterLink>
        </div>
    </div>
    

</div>
</template>


<script>
import { RouterLink } from 'vue-router';
import {useMainStore} from '../stores/counter.js';
export default {
    data() {
        return{
            store:useMainStore(),
            chars:[],
        }
    },
    created(){   
        this.store.getChars();
        setTimeout(()=>{this.chars = this.store.getCurrList;},200);
    },
    methods:{
        nextPage(){
            this.store.charPgPlus();
            this.store.getChars();
            setTimeout(()=>{this.chars = this.store.getCurrList;},200)
        },
        pastPage(){
            this.store.charPgMinus();
            this.store.getChars();
            setTimeout(()=>{this.chars = this.store.getCurrList;},200)
        }
    }
}
</script>



<style scoped>

.chars{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
}

.char{
    display: flex;
    flex-direction: column;
    width: 22%;
    align-items: center;
    margin: 10px;
    padding: 20px;
    transition: all 0.25s;
    cursor: pointer;
}
.char a{
    text-decoration: none;
    color: black;
    text-align: center;
}
.char img{
    width: 100%;
    object-fit: contain;
    border-radius: 100%;
    transition: all 0.25s;
}


.char:hover{
    background-color: rgba(128, 128, 128, 0.398);
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