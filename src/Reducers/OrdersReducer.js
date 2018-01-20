import * as types from '../Actions/types'

const initialState = {
    sandwishes: [],
    options: [],
    drinks: [],
    setMenu: [],
    setMenuDishes: [],
    setMenuSides: [],
    setMenuDrinks: []

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
      const optionsList = sandwishesList[0].map(item => item.options && item.options.map(item => {
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
      const setMenuDishesId = setMenuList[0].map(item => item.eligible.dishes)
      const setMenuDishes = sandwishesList[0].map(item => setMenuDishesId[0].includes(item.id) ? item : null).filter(Boolean)

      const setMenuSidesId = setMenuList[0].map(item => item.eligible.sides)
      const setMenuSides = sandwishesList[0].map(item => setMenuSidesId[0].includes(item.id) ? item : null).filter(Boolean)

      const setMenuDrinksId = setMenuList[0].map(item => item.eligible.drinks)
      const setMenuDrinks = drinksList[0].map(item => setMenuDrinksId[0].includes(item.id) ? item : null).filter(Boolean)

      const setMenuDishesList = setMenuDishes.map(item => {
        return {
          ...item,
          isChecked: false
        }
      })
      const setMenuSidesList = setMenuSides.map(item => {
        return {
          ...item,
          isChecked: false
        }
      })
      const setMenuDrinksList = setMenuDrinks.map(item => {
        return {
          ...item,
          isChecked: false
        }
      })
      return {
        ...state,
        sandwishes: sandwishesList[0],
        options: optionsList.reduce((a, b) => a.concat(b), []).filter(Boolean),
        drinks: drinksList[0],
        setMenu: setMenuList[0],
        setMenuDishes: setMenuDishesList,
        setMenuSides: setMenuSidesList,
        setMenuDrinks: setMenuDrinksList
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
        options: state.options.map(item => {
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
    case types.CHECKED_SET_MENU_ITEM: {
      return {
        ...state,
          setMenuDishes: state.setMenuDishes.map(item => {
            if(item.id !== action.payload) {
              return item
            } else {
              return {
                ...item,
                isChecked: !item.isChecked,
                price: 0
              }
            }
          }),
          setMenuSides: state.setMenuSides.map(item => {
            if(item.id !== action.payload) {
              return item
            } else {
              return {
                ...item,
                isChecked: !item.isChecked,
                price: 0
              }
            }
          }),
          setMenuDrinks: state.setMenuDrinks.map(item => {
            if(item.id !== action.payload) {
              return item
            } else {
              return {
                ...item,
                isChecked: !item.isChecked,
                price: 0
              }
            }
          })
      }
    }

    default:
        return state
    }
  }
