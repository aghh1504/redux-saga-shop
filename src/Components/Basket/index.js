/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  checkoutOrders, checkedCheckoutInput } from '../../Actions'

class Basket extends Component {

  onHandleCheckout = () => {
    this.props.checkoutOrders(this.props.basket)
  }

  calculateTotalPrice = () => {
    const price = this.props.basket.map(item => !item.quantity ? item.price*1 : item.price*item.quantity )
    const total = price.reduce((itemprev, itemnext) => itemprev + itemnext ,0)
    return total
  }

  render() {
    const {basket, checkedCheckoutInput} = this.props
    if(basket.length<1) {
      return <div><p>Basket</p><div>0 items</div></div>
    }
      return (
          <div>
            <p>Basket</p>
            <ul>
              {
                basket.map((item,i) => (
                  <div key={i}>
                    <li style={{display: 'inline-block'}}>{item.name}</li>
                    <div style={{display: 'inline-block', margin: '0.8rem'}}>Price: {!item.quantity ? 1 : item.quantity}x ${item.price}</div>
                    <input type='checkbox' style={{display: 'inline-block'}} checked={item.isChecked} onChange={() => checkedCheckoutInput(item.id)}/>
                </div>
                ))
              }
            </ul>
            <div>Total price: ${this.calculateTotalPrice()}</div>
            <button onClick={this.onHandleCheckout}>Checkout</button>
          </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
      basket: state.basket.basket,
      quantity: state.basket.quantity
    }
}

const mapDispatchToProps = {
 checkoutOrders,
 checkedCheckoutInput
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
