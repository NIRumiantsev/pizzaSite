<template>
    <footer class="footer">
        <div class="container container--footer">
            <nav class="navigation navigation--footer">
                <router-link to="/" class="link--footer">Pizza</router-link>
                <router-link to="/drinks" class="link--footer">Drinks</router-link>
                <router-link to="/sauces" class="link--footer">Sauces</router-link>
                <router-link to="/deserts" class="link--footer">Deserts</router-link>
            </nav>
            <div class="info">
                <div class="info__phone">
                    <img :src="require(`@/assets/icons/phone.svg`)" alt="" width="20" height="20">
                    <p class="info__number">0421-871 874 70</p>
                </div>
                <p class="info__address">Oldeoog 4, Bremen-Huchting, 28259</p>
                <p class="info__hours">Von 12-15 Uhr und 18-21 Uhr (So und Mo Ruhetag)</p>
            </div>
            
        </div>
    </footer>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0;
        background: #ffffff;
        width: 100%;
        font-family: Roboto, sans-serif;
    }

    .container {
        margin: 0 auto;
        width: 1180px;
    }

    .container--footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .navigation--footer {

    }

    .link--footer {
        text-align: center;
        margin: 0 20px;
        text-decoration: none;
        font-size: 14px;
        color: #1b1e21;
        transition: color 0.3s;
    }

    .link--footer:hover {
        color: #3d8f41;
    }

    .info__phone {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .info__number {
        font-size: 20px;
        margin: 0 0 0 10px;
    }

    .info__address {
        font-size: 18px;
        margin: 10px 0;
    }

    .info__hours {
        font-size: 12px;
    }

    @media screen and (max-width: 700px) {

        .navigation {
            flex-direction: column;
            align-items: flex-start;
        }

        .link--footer {
            margin: 5px 0;
        }

        .info__number {
            font-size: 14px;
            margin: 0 0 0 10px;
        }

        .info__address {
            font-size: 12px;
            margin: 10px 0;
        }

        .info__hours {
            font-size: 8px;
        }

    }
</style>