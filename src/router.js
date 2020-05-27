import VueRouter from  'vue-router';
import pizzaPage from "./pages/pizzaPage";
import drinksPage from "./pages/drinksPage";
import saucesPage from "./pages/saucesPage";
import desertsPage from "./pages/desertsPage";
import cartPage from "./pages/cartPage";



export default new VueRouter({

    routes: [
        {
            path: '/',
            component: pizzaPage
        },
        {
            path: '/drinks',
            component: drinksPage
        },
        {
            path: '/sauces',
            component: saucesPage
        },
        {
            path: '/deserts',
            component: desertsPage
        },
        {
            path: '/cart',
            component: cartPage
        }

    ],
});