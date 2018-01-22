/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import './index.css'

export default class SetMenu extends Component {

  state= {
    orders:[]
  }

  _onSelect = (e) => {
    const {setMenu, setMenuDishes, setMenuDrinks, setMenuSides, addToBasket} = this.props
    const dishes = setMenuDishes.find(item => item.name === e.value)
    const drinks = setMenuDrinks.find(item => item.name === e.value)
    const sides = setMenuSides.find(item => item.name === e.value)
    const orders = [dishes, drinks, sides].filter(Boolean)
    this.setState({orders: this.state.orders.concat(orders)})
  }

  render() {
    const {setMenu, setMenuDishes, setMenuDrinks, setMenuSides, addToBasket} = this.props
    const dishesOptions = setMenuDishes.map(item=> item.name)
    const drinksOptions = setMenuDrinks.map(item=> item.name)
    const sidesOptions = setMenuSides.map(item=> item.name)
      return (
          <div className='setmenu_container'>
            <div className='setmenu_dropdown'>
              <Dropdown options={dishesOptions} value={dishesOptions[0]} onChange={(e) => this._onSelect(e)} placeholder="Select a dish" />
              <Dropdown options={drinksOptions} value={drinksOptions[0]} onChange={(e) => this._onSelect(e)} placeholder="Select a drink" />
              <Dropdown options={sidesOptions} value={sidesOptions[0]} onChange={(e) => this._onSelect(e)} placeholder="Select a sides" />
            </div>
            <button className='setmenu_button' onClick={() => addToBasket(this.state.orders)}>Add to basket</button>
          </div>
      )
    }
}
