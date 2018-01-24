/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMenuRequest, addOrders, addToSetMenuSandwitchesBasket, addToSetMenuDrinksBasket } from '../../../Actions'
import './index.css'

class SetMenu extends Component {

  state= {
    showDishes: false,
    showDrinks: false
  }

  onClickHandle = (e,item) => {
    item.isChecked = !item.isChecked
    this.props.addToSetMenuSandwitchesBasket(item)
  }

  showSetMenuSandwitchesOptions = (e) => {
      return (
        <div className='setmenu-select-box-container'>
          {
            this.props.setMenuDishes.map(item=> (
              <div id={item.name} className={`setmenu-select-box-item ${item.isChecked ? 'active': ''}`} onClick={(e) => this.onClickHandle(e,item)}>
                {item.name}
              </div>
            ))
          }
        </div>
      )
  }

  showSetMenuDrinksOptions = () => {
      return (
        <div className='setmenu-select-box-container'>
          {
            this.props.setMenuDrinks.map(item=> (
              <div className='setmenu-select-box-item' onClick={() => this.props.addToSetMenuDrinksBasket(item)}>
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
              <button className='setmenu_button' onClick={() => addToBasket(setMenuItemsBasket)}>Add to basket</button>
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
