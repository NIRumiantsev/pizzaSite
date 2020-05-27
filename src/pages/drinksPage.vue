<template>
    <div>
        <h1 class="title">Abschnitt in der Entwicklung</h1>
        <drinks />
    </div>
</template>

<script>

    import Drinks from "../components/drinks";

    export default {
        components: {
            Drinks
        }
    };
</script>

<style scoped>
    .title {
        font-family: Roboto, sans-serif;
        font-size: 40px;
        color: #2f2b28;
        text-align: center;
    }
</style>