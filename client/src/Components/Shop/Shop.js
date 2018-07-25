import React from 'react';
import { StripeProvider } from 'react-stripe-elements';

import Checkout from '../Payment/Checkout'

class Shop extends React.Component {
  render() {
    return (
      <div>
        <StripeProvider apiKey="pk_test_zgUxPsuel1lgED4695WkRu7q">
          <Checkout />
        </StripeProvider>
      </div>
    );
  }
}

export default Shop;
