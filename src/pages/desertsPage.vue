<template>
    <div>
        <h1 class="title">Abschnitt in der Entwicklung</h1>
        <deserts />
    </div>
</template>

<script>

    import Deserts from "../components/deserts";

    export default {
        components: {
            Deserts
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