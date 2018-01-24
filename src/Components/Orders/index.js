/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMenuRequest, addOrders } from '../../Actions'
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
    const {sandwishes, drinks} = this.props
      return (
        <div>
          <h1>Online</h1>
          <h2>Sandwishes</h2>
          <Sandwishes sandwishes={sandwishes} addToBasket={this.addToBasket}/>
          <h2>Drinks</h2>
          <Drinks drinks={drinks} addToBasket={this.addToBasket}/>
          <h2>SetMenu</h2>
          <SetMenu addToBasket={this.addToBasket}/>
          <Basket/>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
      sandwishes: state.menu.sandwishes,
      options: state.menu.options,
      drinks: state.menu.drinks
    }
}

const mapDispatchToProps = {
 fetchMenuRequest,
 addOrders
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
