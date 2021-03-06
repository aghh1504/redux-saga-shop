import * as types from '../Actions/types'

const initialState = {
    sandwishes: [],
    options: [],
    drinks: [],
    setMenu: [],
    setMenuDishes: [],
    setMenuSides: [],
    setMenuDrinks: [],
    setMenuSandwitchesBasket: [],
    setMenuDrinksBasket: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_MENU_SUCCESS: {
      const sandwishesList = action.data.data.map(item => item.sandwishes.map(item => {return {...item, quantity:1}}))
      const drinksList = action.data.data.map(item => item.drinks.map(item => item))
      const setMenuList = action.data.data.map(item => item.setMenu.map(item => item))
      const optionsList = sandwishesList[0].map(item => item.options && item.options.map(item => item))

      const setMenuDishesId = setMenuList[0].map(item => item.eligible.dishes)
      const setMenuDishes = sandwishesList[0].map(item => setMenuDishesId[0].includes(item.id) ? item : null).filter(Boolean)

      const setMenuSidesId = setMenuList[0].map(item => item.eligible.sides)
      const setMenuSides = sandwishesList[0].map(item => setMenuSidesId[0].includes(item.id) ? item : null).filter(Boolean)

      const setMenuDrinksId = setMenuList[0].map(item => item.eligible.drinks)
      const setMenuDrinks = drinksList[0].map(item => setMenuDrinksId[0].includes(item.id) ? item : null).filter(Boolean)

      const setMenuDishesList = setMenuDishes.map(item => {
        return {
          ...item,
          price: 0
        }
      })
      const setMenuSidesList = setMenuSides.map(item => {
        return {
          ...item,
          price: 0
        }
      })
      const setMenuDrinksList = setMenuDrinks.map(item => {
        return {
          ...item,
          price: 0
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
    case types.ADD_SET_MENU_SANDWITCHES_TO_BASKET: {
      return {
        ...state,
        setMenuSandwitchesBasket: [action.payload]
      }
    }

    case types.ADD_SET_MENU_DRINKS_TO_BASKET: {
      return {
        ...state,
        setMenuDrinksBasket: [action.payload]
      }
    }

    case types.QUANTITY: {
      return {
        ...state,
        sandwishes: state.sandwishes.map(item => {
          if(item.id === action.id){
            return {
              ...item,
              quantity: action.payload
            }
          }else {
            return {
              ...item
            }
          }
        }),
        drinks: state.drinks.map(item => {
          if(item.id === action.id){
            return {
              ...item,
              quantity: action.payload
            }
          }else {
            return {
              ...item
            }
          }
        }),
        setMenu: state.setMenu.map(item => {
          if(item.id === action.id){
            return {
              ...item,
              quantity: action.payload
            }
          }else {
            return {
              ...item
            }
          }
        }),
      }
    }

    default:
        return state
    }
  }
