import { 
    TOGGLE_CART,
    TOGGLE_USER_INFO,
    UPDATE_CART_ITEM_AMMOUNT,
    UPDATE_CART_EXTRA_AMMOUNT
 } from './types';

export const toggleCart = () => ({ type: TOGGLE_CART });

export const toggleUserInfo = () => ({ type: TOGGLE_USER_INFO });

export const updateCartItemAmmount = ( method, id ) => ({ 
    type: UPDATE_CART_ITEM_AMMOUNT, 
    payload: { method, id }
});

export const updateCartExtraAmmount = ( method, id, extraName ) => ({ 
    type: UPDATE_CART_EXTRA_AMMOUNT, 
    payload: { method, id, extraName }
});