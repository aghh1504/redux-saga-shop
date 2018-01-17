import * as types from '../Actions/types'

const initialState = {
    menu: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_MENU_SUCCESS: {
      return {
        ...state,
        menu: action.data.data
      }
    }

    case types.CHECKED_ITEM: {
      return {
        ...state,
        menu: state.menu.map(item => {
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

    default:
        return state
    }
  }
