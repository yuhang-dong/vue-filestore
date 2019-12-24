<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        margin: 0;
        height: 100%;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    #nprogress .bar {
        background-color: #F24646 !important;
    }
</style>
