import { 
    SET_CART_VISIBILITY,
    UPDATE_CART,
 } from './types';

export const setCartVisibility = isVisble => ({ type: SET_CART_VISIBILITY, payload: isVisble });

export const updateCart = ( newCart ) => ({ type: UPDATE_CART, payload: newCart });