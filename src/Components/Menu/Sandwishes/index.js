/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './index.css'

export default class Sandwishes extends Component {
  render() {
    const {sandwishes, checkedInput} = this.props
      return (
          <div>
            {sandwishes && sandwishes.map(item => (
                  <div key={item.id}>
                    <h4 className='sandwishes_name'>{item.name}</h4>
                    <h5 className='sandwishes_price'>Price ${item.price}</h5>
                    <input type='checkbox' id={item.id} className='sandwishes_checkbox' checked={item.isChecked} onChange={() => checkedInput(item.id)}/>
                    {item.options && item.options.map(item => (
                      <div className='sandwishes_extra'>
                        <div className='sandwishes_extra'>Add Extra: {item.name} - ${item.price}</div>
                        <input type='checkbox' id={item.id} className='sandwishes_checkbox' checked={item.isChecked} onChange={() => checkedInput(item.id)}/>
                      </div>
                    ))}
                  </div>
            ))}
          </div>
      )
    }
}
