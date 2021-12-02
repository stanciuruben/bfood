import { 
    TOGGLE_CART, 
    TOGGLE_USER_INFO,
    UPDATE_CART_ITEM_AMMOUNT,
    UPDATE_CART_EXTRA_AMMOUNT
} from "./types";

const initialState = {
    isCartVisible: false,
    isUserInfoVisible: false,
    userName: null,
    cart: [
        {
            name: "Pizza",
            ammount: 1,
            extras: [
                {
                    name: 'wihtout ananas'
                }
            ],
            id: 0,
        }
    ],
    orders: []
}

const RootReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TOGGLE_CART:
            return { ...state, isCartVisible: !state.isCartVisible };
        case TOGGLE_USER_INFO:
            return { ...state, isUserInfoVisible: !state.isUserInfoVisible };
        case UPDATE_CART_ITEM_AMMOUNT:
            const cartItem = state.cart.find( item => item.id === action.payload.id );
            console.log( cartItem );
            return { 
                ...state
            }
        case UPDATE_CART_EXTRA_AMMOUNT:
            return state
        default: return state;
    }
}

export default RootReducer;