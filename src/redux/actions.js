import { 
    SET_USER_INFO_VISIBILITY,
    SET_CART_VISIBILITY,
    UPDATE_CART,
    ADD_TO_CART,
    DISPATCH_ORDER,
    SET_LOADING,
    SET_USER
 } from './types';

export const setUserInfoVisibility = isVisble => ({ 
    type: SET_USER_INFO_VISIBILITY, 
    payload: isVisble 
});

export const setCartVisibility = isVisble => ({ 
    type: SET_CART_VISIBILITY, 
    payload: isVisble 
});

export const updateCart = ( newCart ) => ({ 
    type: UPDATE_CART, 
    payload: newCart 
});

export const addToCart = ( newItem ) => ({ 
    type: ADD_TO_CART, 
    payload: newItem 
});

export const dispatchOrder = () => ({ type: DISPATCH_ORDER });

export const setLoading = isLoading => ({ type: SET_LOADING, payload: isLoading });

export const setUser = user => ({ type: SET_USER, payload: user });