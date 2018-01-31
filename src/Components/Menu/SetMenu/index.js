/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMenuRequest, addOrders, addToSetMenuSandwitchesBasket, addToSetMenuDrinksBasket } from '../../../Actions'
import './index.css'

class SetMenu extends Component {

  state= {
    showDishes: false,
    showDrinks: false,
    active: 0,
    activeDrink: 0,
    quantity: 0
  }

  onHandleQuantity = (e) => {
    this.setState({quantity: e.target.value})
  }

  onClickHandleSandwitches = (e,item, key) => {
    this.props.addToSetMenuSandwitchesBasket(item)
    this.setState({active: key})
  }

  onClickHandleDrink = (e,item, key) => {
    this.props.addToSetMenuDrinksBasket(item)
    this.setState({activeDrink: key})
  }

  showSetMenuSandwitchesOptions = (e) => {
      return (
        <div className='setmenu-select-box-container'>
          {
            this.props.setMenuDishes.map((item, key)=> (
              <div id={item.id} key={item.id} className={`setmenu-select-box-item ${item.id-1 === this.state.active ? 'active': ''}`} onClick={(e) => this.onClickHandleSandwitches(e,item, key)}>
                {item.name}
              </div>
            ))
          }
        </div>
      )
  }

  showSetMenuDrinksOptions = (e) => {
      return (
        <div className='setmenu-select-box-container'>
          {
            this.props.setMenuDrinks.map((item, key)=> (
              <div id={item.id} key={item.id} className={`setmenu-select-box-item ${item.id-100 === this.state.activeDrink ? 'active': ''}`} onClick={(e) => this.onClickHandleDrink(e,item, key)}>
                {item.name}
              </div>
            ))
          }
        </div>
      )
  }

  render() {
    const {setMenu, setMenuDishes, setMenuDrinks, setMenuSides, addToBasket, setMenuSandwitchesBasket, setMenuDrinksBasket} = this.props
    const dishesOptions = setMenuDishes.map(item=> item.name)
    const drinksOptions = setMenuDrinks.map(item=> item.name)
    const sidesOptions = setMenuSides.map(item=> item.name)
    const setMenuItemsBasket = setMenuSandwitchesBasket.concat(setMenuDrinksBasket, setMenuSides, setMenu)
      return (
          <div className='setmenu_container'>
            <div className='setmenu_select'>
              <div className='setmenu-select-box' onClick={() => this.setState({showDishes: !this.state.showDishes})}>Dishes</div>
              {this.state.showDishes ? this.showSetMenuSandwitchesOptions() : null}
              <div className='setmenu-select-box' onClick={() => this.setState({showDrinks: !this.state.showDrinks})}>Drinks</div>
              {this.state.showDrinks ? this.showSetMenuDrinksOptions() : null}
              <div className='setmenu-select-box'>Free Frites</div>
              <input  type='number' placeholder="quantity" onChange={this.onHandleQuantity}/>
              <button className='setmenu_button' onClick={() => addToBasket(setMenuItemsBasket, this.state.quantity)}>Add to basket</button>
            </div>
          </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
      setMenu: state.menu.setMenu,
      setMenuDishes: state.menu.setMenuDishes,
      setMenuSides: state.menu.setMenuSides,
      setMenuDrinks: state.menu.setMenuDrinks,
      setMenuSandwitchesBasket: state.menu.setMenuSandwitchesBasket,
      setMenuDrinksBasket: state.menu.setMenuDrinksBasket
    }
}

const mapDispatchToProps = {
 addToSetMenuDrinksBasket,
 addToSetMenuSandwitchesBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(SetMenu)
