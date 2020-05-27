import { PizzaService } from '../../services'

export const state = {
    pizza: []
}

export const actions = {
    fetchPizza({commit}) {
        PizzaService.getPizza()
            .then((pizza) => {
                commit('setPizza', pizza)
            })
            .catch((err) => {
                commit('setError', err)
            })

    },

}

export const mutations = {
    setPizza(state, pizza) {
        state.pizza = pizza
    },
    setError(state) {
        state.pizza = []
    }

}

export const getters = {
    pizza: ({ pizza }) => pizza,
}

export default {
    state,
    actions,
    mutations,
    getters
}