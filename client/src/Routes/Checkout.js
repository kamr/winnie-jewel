import React from 'react';

import ShoppingCart from '../Components/Checkout/ShoppingCart'
// import Payment from '../Components/Checkout/Payment'

class Checkout extends React.Component {

  render() {
    return (
      <div>
        <ShoppingCart
          shoppingCart={this.props.shoppingCart}
          removeFromCart={this.props.removeFromCart}
        />
      </div>
    );
  }
}

export default Checkout;
