import * as types from '../Actions/types'

const initialState = {
    sandwishes: [],
    drinks: [],
    setMenu: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_MENU_SUCCESS: {
      const sandwishesList = action.data.data.map(item => item.sandwishes.map(item => {
        return {
          ...item,
          isChecked: false
        }
      }))
      const drinksList = action.data.data.map(item => item.drinks.map(item => {
        return {
          ...item,
          isChecked: false
        }
      }))
      const setMenuList = action.data.data.map(item => item.setMenu.map(item => {
        return {
          ...item,
          isChecked: false
        }
      }))
      return {
        ...state,
        sandwishes: sandwishesList[0],
        drinks: drinksList[0],
        setMenu: setMenuList[0],
      }
    }

    case types.CHECKED_ITEM: {
      return {
        ...state,
        sandwishes: state.sandwishes.map(item => {
          if(item.id !== action.payload) {
            return item
          } else {
            return {
              ...item,
              isChecked: !item.isChecked
            }
          }
        }),
        drinks: state.drinks.map(item => {
          if(item.id !== action.payload) {
            return item
          } else {
            return {
              ...item,
              isChecked: !item.isChecked
            }
          }
        }),
        setMenu: state.setMenu.map(item => {
          if(item.id !== action.payload) {
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
