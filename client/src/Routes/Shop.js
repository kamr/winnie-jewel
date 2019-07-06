import React from 'react';

import PreviewBox from '../Components/Shop/PreviewBox';
// import Checkout from '../Components/Payment/Checkout'

import axios from 'axios';
import PAYMENT_SERVER_URL from '../Constants/server';

class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.updateProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.collection !== this.props.match.params.collection) {
      this.updateProducts();
    }
  }

  updateProducts() {
    const url = PAYMENT_SERVER_URL + '/product/getProducts';
    const collection = this.props.match.params.collection;
    axios.get(url, {
      params: {
        collection: collection
      }
    })
    .then(res => {
      const products = res.data;
      this.setState({ products });
    })
    .catch(err => console.log(err));
  }

  render() {
    const collection = this.props.match.params.collection;

    return (
      <div>
        <PreviewBox
          collection={collection}
          products={this.state.products}
        />
      </div>
    );
  }
}

export default Shop;
