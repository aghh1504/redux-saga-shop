/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './index.css'

export default class Sandwishes extends Component {

  onHandleQuantity = e => {
    this.props.onHandleQuantity(e.target.value, e.target.id)
  }

  render() {
    const {sandwishes, addToBasket, onHandleQuantity} = this.props
    console.log(sandwishes);
      return (
          <div>
            {sandwishes && sandwishes.map(item => (
                  <div key={item.name}>
                    <h4 className='sandwishes_name'>{item.name}</h4>
                    <h5 className='sandwishes_price'>Price ${item.price}</h5>
                    <input  id={item.id} type='number' placeholder="quantity" onChange={this.onHandleQuantity}/>
                    <button id={item.id} className='sandwishes_checkbox' onClick={() => addToBasket(item)}>Add to Basket</button>
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
