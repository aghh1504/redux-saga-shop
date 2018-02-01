/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './index.css'

export default class Drinks extends Component {

  onHandleQuantity = e => {
    this.props.onHandleQuantity(e.target.value, e.target.id)
  }

  render() {
    const {drinks, addToBasket, onHandleQuantity} = this.props
      return (
          <div>
            {drinks && drinks.map(item => (
                  <div key={item.id}>
                    <h4 className='drinks_name'>{item.name}</h4>
                    <h5 className='drinks_price'>Price ${item.price}</h5>
                    <input id={item.id} type='number' placeholder="quantity" onChange={this.onHandleQuantity}/>
                    <button id={item.id} className='drinks_checkbox' onClick={() => addToBasket(item)} >Add to basket</button>
                  </div>
            ))}
          </div>
      )
    }
}
