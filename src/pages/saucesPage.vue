<template>
    <div>
        <h1 class="title">Abschnitt in der Entwicklung</h1>
        <sauces />
    </div>
</template>

<script>
    import Sauces from "../components/sauces";

    export default {
        components: {
            Sauces
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