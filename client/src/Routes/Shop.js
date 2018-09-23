import React from 'react';

import ProductBox from '../Components/Product/ProductBox';
// import Checkout from '../Components/Payment/Checkout'

class Shop extends React.Component {

  render() {
    const collection = this.props.match.params.collection;

    return (
      <div>
        <ProductBox
          collection={collection}
        />
      </div>
    );
  }
}

export default Shop;
