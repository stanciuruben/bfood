import { 
    SET_CART_VISIBILITY,
    UPDATE_CART,
    ADD_TO_CART,
    DISPATCH_ORDER
 } from './types';

export const setCartVisibility = isVisble => ({ type: SET_CART_VISIBILITY, payload: isVisble });

export const updateCart = ( newCart ) => ({ type: UPDATE_CART, payload: newCart });

export const addToCart = ( newItem ) => ({ type: ADD_TO_CART, payload: newItem });

export const dispatchOrder = () => ({ type: DISPATCH_ORDER });