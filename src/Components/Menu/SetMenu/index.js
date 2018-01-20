/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './index.css'

export default class SetMenu extends Component {

  setMenuChoose = (kind) => {
    const {checkedSetMenuInput} = this.props
    return (
      <div>
        {
          kind.map((item, i) => (
              <div key={i}>
                <h4 style={{display: 'inline-block'}}>{item.name}</h4>
                <input type='checkbox' id={item.id} style={{display: 'inline-block'}} checked={item.isChecked} onChange={() => checkedSetMenuInput(item.id)}/>
              </div>
        ))}
      </div>
    )
  }

  addSetMenu = () => {
    const {setMenu, checkedInput} = this.props
    return setMenu && setMenu.map((item, i) => (
          <div key={i}>
            <h4 style={{display: 'inline-block'}}>{item.name}</h4>
            <p style={{display: 'inline-block'}}>{item.description}</p>
            <input type='checkbox' id={item.id} style={{display: 'inline-block'}} checked={item.isChecked} onChange={() => checkedInput(item.id)}/>
          </div>
    ))
  }

  render() {
    const {setMenu, setMenuDishes, setMenuDrinks} = this.props
      return (
          <div>
              {this.addSetMenu()}
              {setMenu && setMenu.find(item => item.isChecked) ?
               <div className='setmenu_container'>
                <div className='setmenu_sandwiches'>Main Sandwiches {this.setMenuChoose(setMenuDishes)}</div>
                <div className='setmenu_drinks'>Drinks {this.setMenuChoose(setMenuDrinks)}</div>
              </div>
              : <div />
            }
          </div>
      )
    }
}
