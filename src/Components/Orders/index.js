/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMenuRequest, checkedInput, addOrders } from '../../Actions'
import Basket from '../Basket'

class Orders extends Component {

componentDidMount() {
  this.props.fetchMenuRequest()
}

addToBasket = () => {
  const checkedItems = this.props.menu.filter(item => item.isChecked)
  this.props.addOrders(checkedItems)
}

  render() {
      return (
        <div>
          <h1>Redux Saga</h1>
          <button onClick={this.addToBasket}>Add to basket</button>
          <div>
            {this.props.menu.map((item, i) => (
                  <div key={i}>
                    <h4 style={{display: 'inline-block'}}>{item.text}</h4>
                    <input type='checkbox' id={item.id} style={{display: 'inline-block'}} checked={item.isChecked} onChange={() => this.props.checkedInput(item.id)}/>
                  </div>
            ))}
          </div>
          <Basket/>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
      menu: state.menu.menu
    }
}

const mapDispatchToProps = {
 fetchMenuRequest,
 checkedInput,
 addOrders
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
