import { 
    TOGGLE_CART,
    TOGGLE_USER_INFO
 } from './types';

export const toggleCart = () => {
    return { type: TOGGLE_CART }
}

export const toggleUserInfo = () => {
    return { type: TOGGLE_USER_INFO }
}