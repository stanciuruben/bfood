import { 
    TOGGLE_CART, 
    TOGGLE_USER_INFO
} from "./types";

const initialState = {
    isCartVisible: false,
    isUserInfoVisible: false,
    userName: null,
    cart: [],
    orders: []
}

const RootReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TOGGLE_CART:
            return { ...state, isCartVisible: !state.isCartVisible };
        case TOGGLE_USER_INFO:
            return { ...state, isUserInfoVisible: !state.isUserInfoVisible };
        default: return state;
    }
}

export default RootReducer;