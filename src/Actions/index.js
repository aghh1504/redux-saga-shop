import * as types from './types'

export const fetchMenuRequest = () => ({
    type: types.FETCH_MENU_REQUEST
})

export const checkedInput = id => ({
    type: types.CHECKED_ITEM,
    payload: id
})

export const checkedSetMenuInput = id => ({
    type: types.CHECKED_SET_MENU_ITEM,
    payload: id
})

export const checkedCheckoutInput = id => ({
    type: types.CHECKED_CHECKOUT_ITEMS,
    payload: id
})

export const addOrders = data => ({
    type: types.ADD_ORDER_REQUEST,
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
