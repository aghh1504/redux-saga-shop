/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMenuRequest, checkedInput, addOrders } from '../../Actions'
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
  const drinks = this.props.drinks.filter(item => item.isChecked)
  const setMenu = this.props.setMenu.filter(item => item.isChecked)
  const checkedItems = [...sandwishes, ...drinks, ...setMenu]
  this.props.addOrders(checkedItems)
}

  render() {
    const {sandwishes, drinks, setMenu, checkedInput} = this.props
      return (
        <div>
          <h1>Online</h1>
          <button onClick={this.addToBasket}>Add to basket</button>
          <h2>Sandwishes</h2>
          <Sandwishes sandwishes={sandwishes} checkedInput={checkedInput}/>
          <h2>Drinks</h2>
          <Drinks drinks={drinks} checkedInput={checkedInput}/>
          <h2>SetMenu</h2>
          <SetMenu setMenu={setMenu} checkedInput={checkedInput}/>
          <Basket/>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
      sandwishes: state.menu.sandwishes,
      drinks: state.menu.drinks,
      setMenu: state.menu.setMenu,
    }
}

const mapDispatchToProps = {
 fetchMenuRequest,
 checkedInput,
 addOrders
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
