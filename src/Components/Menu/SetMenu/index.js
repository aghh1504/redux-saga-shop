/*eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class SetMenu extends Component {
  render() {
    const {setMenu, checkedInput} = this.props
      return (
          <div>
            {setMenu && setMenu.map((item, i) => (
                  <div key={i}>
                    <h4 style={{display: 'inline-block'}}>{item.name}</h4>
                    <input type='checkbox' id={item.id} style={{display: 'inline-block'}} checked={item.isChecked} onChange={() => checkedInput(item.id)}/>
                  </div>
            ))}
          </div>
      )
    }
}
