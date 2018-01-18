/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './index.css'

export default class Sandwishes extends Component {

  addExtraCheese = () => {
  return  this.props.sandwishes.map(item => item.options && item.options.map(item => (
      <div>Add Extra: {item.name} - ${item.price}</div>
    )))
  }

  render() {
    const {sandwishes, checkedInput} = this.props
      return (
          <div>
            <div>{this.addExtraCheese()}</div>
            {sandwishes && sandwishes.map(item => (
                  <div key={item.id}>
                    <h4 className='sandwishes_name'>{item.name}</h4>
                    <h5 className='sandwishes_price'>Price ${item.price}</h5>
                    <input type='checkbox' id={item.id} className='sandwishes_checkbox' checked={item.isChecked} onChange={() => checkedInput(item.id)}/>
                  </div>
            ))}
          </div>
      )
    }
}
