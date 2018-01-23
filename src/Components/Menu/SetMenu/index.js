/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './index.css'

export default class SetMenu extends Component {

  state={
    showDishes: false,
    showDrinks: false
  }

  showSetMenuOptions = (options) => {
      return (
        <div className='setmenu-select-box-container'>
          {
            options.map(item=> (
              <div className='setmenu-select-box-item' onClick={() => this.props.addToSetMenuBasket(item)}>
                {item.name}
              </div>
            ))
          }
        </div>
      )
  }

  render() {
    const {setMenu, setMenuDishes, setMenuDrinks, setMenuSides, addToBasket} = this.props
    const dishesOptions = setMenuDishes.map(item=> item.name)
    const drinksOptions = setMenuDrinks.map(item=> item.name)
    const sidesOptions = setMenuSides.map(item=> item.name)
    console.log(this.state);
      return (
          <div className='setmenu_container'>
            <div className='setmenu_select'>
              <div className='setmenu-select-box' onClick={() => this.setState({showDishes: !this.state.showDishes})}>Dishes</div>
              {this.state.showDishes ? this.showSetMenuOptions(setMenuDishes) : null}
              <div className='setmenu-select-box' onClick={() => this.setState({showDrinks: !this.state.showDrinks})}>Drinks</div>
              {this.state.showDrinks ? this.showSetMenuOptions(setMenuDrinks) : null}
              <div className='setmenu-select-box'>Frites</div>
              <button className='setmenu_button' onClick={() => addToBasket()}>Add to basket</button>
            </div>
          </div>
      )
    }
}
