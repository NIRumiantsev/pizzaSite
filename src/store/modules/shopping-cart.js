const initialState = {
    cartItems: [],
    orderTotal: 0,
    itemsTotal: 0
}


const state = {
    ...initialState
}

const actions = {
    addPizzaToCart(context, options) {
        const pizzaId = options.pizzaId;
        const small = options.small;
        const pizza = findPizzaInList(context, pizzaId);
        context.commit('addPizza', {
            pizza: pizza,
            small: small,
        })

    },
    delPizzaFromCart(context, options) {
        const pizzaId = options.pizzaId;
        const small = options.small;
        const pizza = findPizzaInList(context, pizzaId);
        context.commit('delPizza', {
            pizza: pizza,
            small: small,
        })
    },
    decPizzaInCart(context, options) {
        const pizzaId = options.pizzaId;
        const small = options.small;
        const pizza = findPizzaInList(context, pizzaId);
        context.commit('decBook', {
            pizza: pizza,
            small: small,
        })
    }
}

const mutations = {
    addPizza(state, options) {
        const pizza = options.pizza;
        const small = options.small;
        updateOrder(state, pizza, 1, small);
    },
    decBook(state, options) {
        const { cartItems } = state;
        const pizza = options.pizza;
        const small = options.small;
        const item = cartItems.find((item) => item.id === pizza.id && item.small === small);
        if (item.count <= 1) {
            const itemIndex = cartItems.findIndex((item) => item.id === pizza.id && item.small === small);
            state.cartItems = cartItems.slice(0, itemIndex).concat(cartItems.slice(itemIndex + 1))
        } else {
            updateOrder(state, pizza, -1, small);
        }
    },
    delPizza(state, options) {
        const { cartItems } = state;
        const pizza = options.pizza;
        const small = options.small;
        const itemIndex = cartItems.findIndex((item) => item.id === pizza.id && item.small === small);
        state.cartItems = cartItems.slice(0, itemIndex).concat(cartItems.slice(itemIndex + 1))
        let orderTotal = 0;
        for(let item of state.cartItems) {
            orderTotal += item.total
        }
        state.orderTotal = orderTotal
        let itemsTotal = 0;
        for(let item of state.cartItems) {
            itemsTotal += item.count
        }
        state.itemsTotal = itemsTotal
    }
}

const getters = {
    cartItems: (state) => state.cartItems,
    orderTotal: (state) => state.orderTotal,
    itemsTotal: (state) => state.itemsTotal
}

const findPizzaInList = (context, pizzaId) => {
    const list = context.rootState.pizzaList.pizza;
    return list.find((pizza) => pizza.id === pizzaId);
}

const updateOrder = (state, pizza, quantity, small) => {
    const { cartItems } = state;
    const itemIndex = cartItems.findIndex((item) => item.id === pizza.id && item.small === small);
    const newItem = updateCartItem(pizza, cartItems[itemIndex], quantity, small);
    if (itemIndex >= 0) {
        state.cartItems = cartItems.slice(0, itemIndex).concat([newItem]).concat(cartItems.slice(itemIndex + 1))
    } else {
        state.cartItems.push(newItem)
    }
    let orderTotal = 0;
    for(let item of state.cartItems) {
        orderTotal += item.total
    }
    state.orderTotal = orderTotal;
    let itemsTotal = 0;
    for(let item of state.cartItems) {
        itemsTotal += item.count
    }
    state.itemsTotal = itemsTotal
}

const updateCartItem = (pizza, item = {}, quantity, small) => {
    const {
        id = pizza.id,
        title = pizza.title,
        count = 0,
        total = 0,
        image = pizza.image
    } = item;
    if (small) {
        return {
            id,
            title,
            count: count + quantity,
            total: total + pizza.prices.small * quantity,
            image,
            small
        }
    }
    return {
        id,
        title,
        count: count + quantity,
        total: total + pizza.prices.large * quantity,
        image,
        small
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}