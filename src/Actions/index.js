import * as types from './types'

export const fetchMenuRequest = () => ({
    type: types.FETCH_MENU_REQUEST
})

export const checkedCheckoutInput = id => ({
    type: types.CHECKED_CHECKOUT_ITEMS,
    payload: id
})

export const addOrders = data => ({
    type: types.ADD_ORDER_REQUEST,
    payload: data
})

export const addToSetMenuSandwitchesBasket = data => ({
    type: types.ADD_SET_MENU_SANDWITCHES_TO_BASKET,
    payload: data
})

export const addToSetMenuDrinksBasket = data => ({
    type: types.ADD_SET_MENU_DRINKS_TO_BASKET,
    payload: data
})

export const checkoutOrders = data => ({
    type: types.CHECKOUT_ORDER_REQUEST,
    payload: data
})

export const deleteOrders = id => ({
    type: types.DELETE_ORDER_REQUEST,
    payload: id
})
