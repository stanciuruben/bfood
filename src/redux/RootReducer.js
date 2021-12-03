import { 
    SET_CART_VISIBILITY,
    UPDATE_CART,
    ADD_TO_CART,
    DISPATCH_ORDER
} from "./types";

const initialState = {
    isCartVisible: true,
    userName: null,
    cart: [
        {
            name: "Pizza carbonara napoletana di milano",
            ammount: 1,
            price: 7.99,
            totalPrice: 7.99,
            extras: [
                {
                    name: 'wihtout ananas',
                    id: 0
                },
                {
                    name: 'with cheese',
                    id: 1
                },
                {
                    name: 'with tuna',
                    id: 2
                }
            ],
            id: 0,
        },
        {
            name: "Pizza milano",
            ammount: 1,
            price: 5.69,
            totalPrice: 5.69,
            extras: [
                {
                    name: 'with ananas',
                    id: 0,
                    price: 1.99
                }
            ],
            id: 1,
        },
        {
            name: "Pizza carbonara napoletana di milano",
            ammount: 1,
            price: 7.99,
            totalPrice: 7.99,
            extras: [
                {
                    name: 'wihtout ananas',
                    id: 0
                },
                {
                    name: 'with cheese',
                    id: 1
                },
                {
                    name: 'with tuna',
                    id: 2
                }
            ],
            id: 2,
        },
        {
            name: "Pizza carbonara napoletana di milano",
            ammount: 1,
            price: 7.99,
            totalPrice: 7.99,
            extras: [
                {
                    name: 'wihtout ananas',
                    id: 0
                },
                {
                    name: 'with cheese',
                    id: 1
                },
                {
                    name: 'with tuna',
                    id: 2
                }
            ],
            id: 3,
        },
        {
            name: "Pizza carbonara napoletana di milano",
            ammount: 1,
            price: 7.99,
            totalPrice: 7.99,
            extras: [
                {
                    name: 'wihtout ananas',
                    id: 0
                },
                {
                    name: 'with cheese',
                    id: 1
                },
                {
                    name: 'with tuna',
                    id: 2
                }
            ],
            id: 4,
        },
        {
            name: "Pizza carbonara napoletana di milano",
            ammount: 1,
            price: 7.99,
            totalPrice: 7.99,
            extras: [
                {
                    name: 'wihtout ananas',
                    id: 0
                },
                {
                    name: 'with cheese',
                    id: 1
                },
                {
                    name: 'with tuna',
                    id: 2
                }
            ],
            id: 5,
        }
    ],
    orders: []
}

const RootReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case SET_CART_VISIBILITY:
            return { ...state, isCartVisible: action.payload };
        case UPDATE_CART:
            return { ...state, cart: action.payload };
        case ADD_TO_CART:
            return { ...state, cart: state.cart.concat( [ action.payload ] ) };
        case DISPATCH_ORDER:
            return { 
                ...state, orders: 
                state.orders.concat( [{ items: state.cart }] ), 
                cart: []
            };
        default: return state;
    }
}

export default RootReducer;