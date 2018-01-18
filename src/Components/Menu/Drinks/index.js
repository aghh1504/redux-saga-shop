/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './index.css'

export default class Drinks extends Component {
  render() {
    const {drinks, checkedInput} = this.props
      return (
          <div>
            {drinks && drinks.map(item => (
                  <div key={item.id}>
                    <h4 className='drinks_name'>{item.name}</h4>
                    <h5 className='drinks_price'>Price ${item.price}</h5>
                    <input type='checkbox' id={item.id} className='drinks_checkbox' checked={item.isChecked} onChange={() => checkedInput(item.id)}/>
                  </div>
            ))}
          </div>
      )
    }
}
