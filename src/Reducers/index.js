import menu from './OrdersReducer'
import basket from './BasketReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  menu,
  basket
})

export default rootReducer;
