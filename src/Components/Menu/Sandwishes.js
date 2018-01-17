/*eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class Sandwishes extends Component {
  render() {
    const {sandwishes, checkedInput} = this.props
      return (
          <div>
            {sandwishes && sandwishes.map((item, i) => (
                  <div key={i}>
                    <h4 style={{display: 'inline-block'}}>{item.name}</h4>
                    <input type='checkbox' id={item.id} style={{display: 'inline-block'}} checked={item.isChecked} onChange={() => checkedInput(item.id)}/>
                  </div>
            ))}
          </div>
      )
    }
}
