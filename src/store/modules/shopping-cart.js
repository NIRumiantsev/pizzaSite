const initialState = {
    cartItems: [],
    orderTotal: 0,
    itemsTotal: 0
}


const state = {
    ...initialState
}

const actions = {

    addItemToCart(context, options) {
        const newItemId = options.itemId;
        const small = options.small;
        const category = options.category;
        const item = findItemInList(context, newItemId, category);
        context.commit('addItem', {
            item: item,
            small: small,
        })

    },

    delItemFromCart(context, options) {
        const newItemId = options.itemId;
        const small = options.small;
        const category = options.category;
        const item = findItemInList(context, newItemId, category);
        context.commit('delItem', {
            item: item,
            small: small,
        })
    },

    decItemInCart(context, options) {
        const newItemId = options.itemId;
        const small = options.small;
        const category = options.category;
        const item = findItemInList(context, newItemId, category);
        context.commit('decItem', {
            item: item,
            small: small,
        })
    }
}

const mutations = {

    addItem(state, options) {
        const item = options.item;
        const small = options.small;
        updateOrder(state, item, 1, small);
    },

    decItem(state, options) {
        const { cartItems } = state;
        const item = options.item;
        const small = options.small;
        const desiredItem = cartItems.find((checkedItem) => checkedItem.category === item.category && checkedItem.id === item.id && checkedItem.small === small);
        if (desiredItem.count <= 1) {
            const itemIndex = cartItems.findIndex((checkedItem) => checkedItem.category === item.category && checkedItem.id === item.id && checkedItem.small === small);
            state.cartItems = cartItems.slice(0, itemIndex).concat(cartItems.slice(itemIndex + 1));
            state.itemsTotal -= 1;
        } else {
            updateOrder(state, item, -1, small);
        }
    },

    delItem(state, options) {
        const { cartItems } = state;
        const item = options.item;
        const small = options.small;
        const itemIndex = cartItems.findIndex((checkedItem) => checkedItem.category === item.category && checkedItem.id === item.id && checkedItem.small === small);
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

const findItemInList = (context, newItemId, category) => {
    let list;
    switch (category) {
        case 'pizza':
            list = context.rootState.pizza.pizza;
            break;
        case 'cold-drinks':
            list = context.rootState.drinks.coldDrinks;
            break;
        case 'hot-drinks':
            list = context.rootState.drinks.hotDrinks;
            break;
        case 'beer-drinks':
            list = context.rootState.drinks.beerDrinks;
            break;
        default:
            list = [];
    }

    return list.find((item) => item.id === newItemId);
}

const updateOrder = (state, item, quantity, small) => {
    const { cartItems } = state;
    const itemIndex = cartItems.findIndex((checkedItem) => checkedItem.category === item.category && checkedItem.id === item.id && checkedItem.small === small);
    const newItem = updateCartItem(item, cartItems[itemIndex], quantity, small);
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

const updateCartItem = (item, newItem = {}, quantity, small) => {
    const {
        category = item.category,
        id = item.id,
        title = item.title,
        count = 0,
        total = 0,
        image = item.image,
        volumeSmall = item.volume.small,
        volumeLarge = item.volume.large,
    } = newItem;
    if (small) {
        return {
            category,
            id,
            title,
            count: count + quantity,
            total: total + item.prices.small * quantity,
            image,
            small,
            volumeSmall,
            volumeLarge
        }
    }
    return {
        category,
        id,
        title,
        count: count + quantity,
        total: total + item.prices.large * quantity,
        image,
        small,
        volumeSmall,
        volumeLarge
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}