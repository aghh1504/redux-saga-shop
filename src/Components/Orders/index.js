/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMenuRequest, addOrders, addToSetMenuBasket } from '../../Actions'
import Basket from '../Basket'
import Sandwishes from '../Menu/Sandwishes'
import Drinks from '../Menu/Drinks'
import SetMenu from '../Menu/SetMenu'

class Orders extends Component {

componentDidMount() {
  this.props.fetchMenuRequest()
}

addToBasket = (item) => {
  this.props.addOrders(item)
}

  render() {
    const {sandwishes, drinks, setMenu, setMenuDishes, setMenuSides, setMenuDrinks, addToSetMenuBasket} = this.props
      return (
        <div>
          <h1>Online</h1>
          <h2>Sandwishes</h2>
          <Sandwishes sandwishes={sandwishes} addToBasket={this.addToBasket}/>
          <h2>Drinks</h2>
          <Drinks drinks={drinks} addToBasket={this.addToBasket}/>
          <h2>SetMenu</h2>
          <SetMenu setMenu={setMenu} setMenuDishes={setMenuDishes} setMenuSides={setMenuSides} setMenuDrinks={setMenuDrinks} addToBasket={this.addToBasket} addToSetMenuBasket={addToSetMenuBasket}/>
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
 addOrders,
 addToSetMenuBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
