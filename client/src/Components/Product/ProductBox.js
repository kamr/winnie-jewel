import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import axios from 'axios';
import PAYMENT_SERVER_URL from '../../Constants/server';

import Product from './Product'

const styles = {
  root: {
    // width: '100%',
    // height: '100%',
    // backgroundColor: 'red'
  }
};

class ProductBox extends React.Component {

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
    if (prevProps.collection !== this.props.collection) {
      this.updateProducts();
    }
  }

  updateProducts() {
    const url = PAYMENT_SERVER_URL + '/product/getProducts';
    const collection = this.props.collection
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

  render () {
    const classes = this.props.classes;

    const products = this.state.products
    const productDisplay = []
    for (var i = 0, len = products.length; i < len; i++) {
      const productName = products[i]['name']
      productDisplay.push(
        <Product
          name={productName}
          key={i}
        />
      );
    }

    return (
      <div className={classes.root}>
        {productDisplay}
      </div>
    );
  }
}

export default withStyles(styles)(ProductBox);
