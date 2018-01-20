/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMenuRequest, checkedInput, checkedSetMenuInput, addOrders } from '../../Actions'
import Basket from '../Basket'
import Sandwishes from '../Menu/Sandwishes'
import Drinks from '../Menu/Drinks'
import SetMenu from '../Menu/SetMenu'

class Orders extends Component {

componentDidMount() {
  this.props.fetchMenuRequest()
}

addToBasket = () => {
  const sandwishes = this.props.sandwishes.filter(item => item.isChecked)
  const options = this.props.options.filter(item => item.isChecked)
  const drinks = this.props.drinks.filter(item => item.isChecked)
  const setMenu = this.props.setMenu.filter(item => item.isChecked)
  const setMenuDishes = this.props.setMenuDishes.filter(item => item.isChecked)
  const setMenuDrinks = this.props.setMenuDrinks.filter(item => item.isChecked)
  const checkedItems = [...sandwishes, ...options, ...drinks, ...setMenu, ...setMenuDishes, ...setMenuDrinks]
  this.props.addOrders(checkedItems)
}

  render() {
    const {sandwishes, drinks, setMenu, setMenuDishes, setMenuSides, setMenuDrinks, checkedInput, checkedSetMenuInput} = this.props
      return (
        <div>
          <h1>Online</h1>
          <button onClick={this.addToBasket}>Add to basket</button>
          <h2>Sandwishes</h2>
          <Sandwishes sandwishes={sandwishes} checkedInput={checkedInput}/>
          <h2>Drinks</h2>
          <Drinks drinks={drinks} checkedInput={checkedInput}/>
          <h2>SetMenu</h2>
          <SetMenu setMenu={setMenu} setMenuDishes={setMenuDishes} setMenuSides={setMenuSides} setMenuDrinks={setMenuDrinks} checkedInput={checkedInput} checkedSetMenuInput={checkedSetMenuInput}/>
          <Basket/>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
      sandwishes: state.menu.sandwishes,
      options: state.menu.options,
      drinks: state.menu.drinks,
      setMenu: state.menu.setMenu,
      setMenuDishes: state.menu.setMenuDishes,
      setMenuSides: state.menu.setMenuSides,
      setMenuDrinks: state.menu.setMenuDrinks
    }
}

const mapDispatchToProps = {
 fetchMenuRequest,
 checkedInput,
 checkedSetMenuInput,
 addOrders
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
