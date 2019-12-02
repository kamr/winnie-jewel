import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';
import SERVER_URL from '../../Constants/server';

import Preview from './Preview'

const styles = {
  root: {
    padding: '20px'
    // width: '100%',
    // height: '100%',
    // backgroundColor: 'red'
  }
};

class PreviewBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: {}
    }
  }

  // CODE VERY SIMILAR IN SRC/COMPONENTS/CHECKOUT/SHOPPINGCARTCONTENTS.JS
  componentDidMount() {
    this.refreshProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.collection !== this.props.collection) {
      this.refreshProducts();
    }
  }

  refreshProducts() {
    const url = SERVER_URL + '/product/getProducts';
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
    for (const productId in products) {
      const product = products[productId]
      productDisplay.push(
        <Grid
          item
          key={productId}
        >
          <Preview
            productId={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        </Grid>
      );
    }

    return (
      <Grid
        container
        justify="center"
        className={classes.root}
        spacing={40}
      >
        {productDisplay}
      </Grid>
    );
  }
}

export default withStyles(styles)(PreviewBox);
