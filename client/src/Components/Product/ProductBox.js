import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import axios from 'axios';
import PAYMENT_SERVER_URL from '../../Constants/server';

const styles = {

};

class ProductBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  // api call in DID or WILL mount
  componentWillMount() {
    const url = PAYMENT_SERVER_URL + '/product/getProducts';
    axios.get(url, {
      params: {
        collection: "seasons"
      }
    })
    .then(res => {
      const products = res.data;
      this.setState({ products });
    })
    .catch(err => console.log(err));

  }

  render () {
    const prods = []
    this.state.products.forEach(function(p, i) {
      prods.push(
        <div>{p.name}</div>
      );
    })

    return (
      <div>
        Product Box!
        {prods}
      </div>
    );
  }
}

export default withStyles(styles)(ProductBox);
