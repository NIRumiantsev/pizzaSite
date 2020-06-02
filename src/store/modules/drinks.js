import { DrinksService } from '../../services'

export const state = {
    coldDrinks: [],
    hotDrinks: [],
    beerDrinks: [],
}

export const actions = {
    fetchColdDrinks({commit}) {
        DrinksService.getColdDrinks()
            .then((coldDrinks) => {
                commit('setColdDrinks', coldDrinks)
            })
            .catch((err) => {
                commit('setError', err)
            })

    },

    fetchHotDrinks({commit}) {
        DrinksService.getHotDrinks()
            .then((hotDrinks) => {
                commit('setHotDrinks', hotDrinks)
            })
            .catch((err) => {
                commit('setError', err)
            })
    },

    fetchBeerDrinks({commit}) {
        DrinksService.getBeerDrinks()
            .then((beerDrinks) => {
                commit('setBeerDrinks', beerDrinks)
            })
            .catch((err) => {
                commit('setError', err)
            })
    },
}

export const mutations = {
    setColdDrinks(state, coldDrinks) {
        state.coldDrinks = coldDrinks
    },
    setHotDrinks(state, hotDrinks) {
        state.hotDrinks = hotDrinks
    },
    setBeerDrinks(state, beerDrinks) {
        state.beerDrinks = beerDrinks
    },
    setError(state) {
        state.coldDrinks = [];
        state.hotDrinks = [];
        state.beerDrinks = [];
    },
}

export const getters = {
    coldDrinks: ({ coldDrinks }) => coldDrinks,
    hotDrinks: ({ hotDrinks }) => hotDrinks,
    beerDrinks: ({ beerDrinks }) => beerDrinks,
}

export default {
    state,
    actions,
    mutations,
    getters
}