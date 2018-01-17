import * as types from '../Actions/types'

const initialState = {
    basket: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CHECKED_CHECKOUT_ITEMS: {
      return {
        ...state,
        basket: state.basket.map(item => {
          if(item.id !== Number(action.payload)) {
            return item
          } else {
            return {
              ...item,
              isChecked: !item.isChecked
            }
          }
        })
      }
    }

    case types.ADD_ORDER_REQUEST: {
      return {
        ...state,
        basket: action.payload
      }
    }

    default:
        return state
    }
  }
