/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './index.css'

export default class Sandwishes extends Component {
  state={
    quantity:0
  }

    onHandleQuantity = (e) => {
      this.setState({quantity: e.target.value})
    }
  render() {
    const {sandwishes, addToBasket} = this.props
      return (
          <div>
            {sandwishes && sandwishes.map(item => (
                  <div key={item.id}>
                    <h4 className='sandwishes_name'>{item.name}</h4>
                    <h5 className='sandwishes_price'>Price ${item.price}</h5>
                    <input  type='number' placeholder="quantity" onChange={this.onHandleQuantity}/>
                    <button id={item.id} className='sandwishes_checkbox' onClick={() => addToBasket(item, this.state.quantity)}>Add to Basket</button>
                    {item.options && item.options.map((item,i) => (
                      <div className='sandwishes_extra' key={i}>
                        <div className='sandwishes_extra'>Add Extra: {item.name} - ${item.price}</div>
                        <button id={item.id} className='sandwishes_checkbox' onClick={() => addToBasket(item)}>Add to Basket</button>
                      </div>
                    ))}
                  </div>
            ))}
          </div>
      )
    }
}
