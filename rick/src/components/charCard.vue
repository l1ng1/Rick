<template>
    
    <div class="character">

        <img :src="this.char.image" alt="">
        <h1>{{ this.char.name }}</h1>

        <p>Gender:  {{ this.char.gender }}</p>
        <p>Status: {{ this.char.status }}</p>
        <p>Location:  {{ this.char.location.name }}</p>
        <p>Species: {{ this.char.species }}</p>
        <button @click="()=>{this.$router.go(-1)}">Back</button>
    </div>


</template>

<script>
import { useMainStore } from '@/stores/counter';
export default {
    data() {
        return{
            store:useMainStore(),
            char:[]
        }        
    },
    created(){
        this.char = this.store.getCurrChar
        console.log(this.char);
    }
}
</script>

<style scoped>


.character{
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
    align-items: center;
    padding: 10px;
    background-color: rgba(128, 128, 128, 0.377);
    font-size: 18px;
}
.character img{width: 60%;}


.character button{
    border: none;
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.25s;
    background-color: white;
}

.character button:hover{
    background-color: rgba(156, 156, 156, 0.626);
}

</style>