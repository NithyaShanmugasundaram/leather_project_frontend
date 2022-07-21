import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from "../actions/types";

const initialState = {
    products: [],
    product: {}
}
function productsReducer(state = initialState, action) {

    const { type, payload } = action
    console.log(payload, type)
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                product: payload
            }
        default:
            return {
                ...state
            }
    }
}
export default productsReducer