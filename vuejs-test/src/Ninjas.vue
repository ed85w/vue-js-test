<template>
    <div>
        <h1>Title in Ninjas.vue file</h1>
        <ul>
            <li v-for="ninja in ninjas">{{ninja}}</li>
        </ul>
    </div>
</template>

<script>



export default{
    data(){
        return {
            ninjas: ['Yoshi', 'Mario', 'Ryu']
        }
    }
}
</script>

<!-- omit 'scoped' to apply styles to all components -->
<style scoped>

h1 {
    color: red;
}
</style>
