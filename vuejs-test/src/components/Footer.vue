<template>
    <footer>
        <p>{{copyright}} - {{title}}</p>
    </footer>
</template>

<script>

import {bus} from '../main';

export default {
    props: {
        title: {
            type: String
        }
    },
    data () {
        return {
            copyright: 'Copyright 2019'
        }
    },
    //lifecycle hook, fired when compnent is created
    created(){
        bus.$on('titleChanged', (data) => { //title changed is defined in header.vue 2nd param (data) is 'Vue Wizards', also defined in header.vue
            this.title = data;
        })
    }
}
</script>

<style scoped> 

footer {
    background: #222;
    padding: 6px;
}

p {
    color: lightgreen;
    text-align: center;
}

</style>
