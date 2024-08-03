<template>
    
    <p>Location</p>

</template>

<script>
import { useMainStore } from '../stores/counter';
export default {
    data() {
        return{
            store:useMainStore(),
        }
    },
}
</script>
<style scoped>



</style>