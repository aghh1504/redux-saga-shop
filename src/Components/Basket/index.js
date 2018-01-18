/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  checkoutOrders, checkedCheckoutInput } from '../../Actions'

class Basket extends Component {

  onHandleCheckout = () => {
    const checkoutItem =  this.props.basket.filter(item => item.isChecked)
    this.props.checkoutOrders(checkoutItem)
  }

  render() {
    const {basket} = this.props
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
                    <li style={{display: 'inline-block'}}>{item.text}</li>
                    <input type='checkbox' style={{display: 'inline-block'}} checked={item.isChecked} onChange={() => this.props.checkedCheckoutInput(item.id)}/>
                </div>
                ))
              }
            </ul>
            <button onClick={this.onHandleCheckout}>Checkout</button>
          </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
      basket: state.basket.basket
    }
}

const mapDispatchToProps = {
 checkoutOrders,
 checkedCheckoutInput
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
