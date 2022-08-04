
import {
    GET_NUMBER_CART, ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY,
    DELETE_CART
} from '../actions/types';

const initProduct = {
    numberCart: 0,
    Carts: [],
    _products: []
}

function cartReducer(state = initProduct, action) {
    const { type, payload } = action
    console.log('payload', payload)
    switch (type) {
        case GET_NUMBER_CART:
            return {
                ...state
            }
        case ADD_CART:
            if (state.numberCart == 0) {
                console.log('Add_cart')
                let cart = {
                    id: payload.id,
                    quantity: 1,
                    name: payload.name,
                    image: payload.image,
                    original_price: payload.original_price,
                    offer_price: payload.offer_price,
                }
                state.Carts.push(cart);
            }
            else {
                console.log('numberCart');
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.id == payload.id) {
                        state.Carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    console.log('checkFalse :>> ', check);
                    let _cart = {
                        id: payload.id,
                        quantity: 1,
                        name: payload.name,
                        image: payload.image,
                        original_price: payload.original_price,
                        offer_price: payload.offer_price,
                    }
                    state.Carts.push(_cart);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            }
        case INCREASE_QUANTITY:
            state.numberCart++
            state.Carts[payload].quantity++;

            return {
                ...state
            }
        case DECREASE_QUANTITY:
            let quantity = state.Carts[payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.Carts[payload].quantity--;
            }

            return {
                ...state
            }
        case DELETE_CART:
            let quantity_ = state.Carts[payload].quantity;
            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                Carts: state.Carts.filter(item => {
                    return item.id != state.Carts[payload].id
                })

            }
        default:
            return state;
    }
}

export default cartReducer;