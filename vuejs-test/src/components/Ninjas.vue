<template>
    <div id="ninjas">
        <ul>
            <li v-for="ninja in ninjasEtc" v-on:click="ninja.show =! ninja.show">
                <h2>{{ninja.name}}</h2>
                <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
            </li>
        </ul>
        <button v-on:click="deleteNinja">Delete Ninja</button>
    </div>

</template>

<script>

export default {
    props: {
        ninjasEtc: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
        }
    },
    methods: {
        deleteNinja: function(){
            this.ninjasEtc.pop();     
        }
    },
    // lifecycle hooks

    //occurs before component is created
    beforeCreate(){
        alert('beforeCreate');
    },

    //occurs after component is created (good time to fetch from DB)
    created(){
        alert('created');
    },

    //before component is mounted
    beforeMount(){
        alert('beforeMount');
    },

    //after component has been mounted (good time to manipulate DOM)
    mounted(){
        alert('mounted');
    },

    //if vue detects change, runs this before change
    beforeUpdate(){
        alert('beforeUpdate');
    },

    //if vue detects change, runs this after change and re-render
    updated(){
        alert('updated');
    }

}
</script>

<style scoped>

#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
