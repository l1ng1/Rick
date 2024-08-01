<template>
    
    <div class="nav">
        
        <RouterLink to="/">Characters</RouterLink>
        <RouterLink to="/episodes">Episodes</RouterLink>
        <RouterLink to="/locations">Locations</RouterLink>

    </div>



</template>



<script>
import {RouterLink,RouterView} from 'vue-router';
export default {
    data() {
        return{
            
        }
    },
}
</script>

<style scoped>

.nav{
    display: flex;
    width: 80%;
    margin: 20px auto;
    justify-content: space-between;
}


.nav a{
    text-decoration: none;
    font-size: 24px;
    color: black;
    background-color: gray;
    padding: 10px 20px;
}


</style>
