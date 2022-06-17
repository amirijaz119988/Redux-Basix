import { Add_To_Cart, Remove_To_Cart } from "../constants";


export default function cartReducer(state=[], action) {
    switch (action.type) {
        case Add_To_Cart:
            return [
                ...state,
                {cartData:action.data}
            ]
        case Remove_To_Cart:
            return {
                ...state,
                cartData: action.data
            }
        default:
            return state
    }

}