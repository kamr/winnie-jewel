import React from 'react';

import axios from 'axios';
import SERVER_URL from '../../Constants/server';
import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  shoppingCartBox: {
    // backgroundColor: 'red',
    margin: '20px',
    border: '2px solid black'
  },
  itemBox: {
    display: 'flex',
    flexDirection: 'row',
    height: 140,
    backgroundColor: 'red',
    alignItems: 'center',
    marginBottom: '10px'
  },
  itemImage: {
    width: 140,
    // backgroundColor: 'blue'
  },
  itemName: {
    backgroundColor: '#FF0',
    textAlign: 'left',
    flexGrow: 10
  },
  itemQuantity: {
    minWidth: 40,
    backgroundColor: 'blue',
    marginLeft: 'auto',
    textAlign: 'center',
    flexGrow: 2
  },
  itemPrice: {
    minWidth: 60,
    textAlign: 'center',
    backgroundColor: 'green',
    flexGrow: 2
  },
  itemDelete: {
    width: 30,
    textAlign: 'center',
    flexGrow: 2
  }
}

class ShoppingCart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.refreshProducts();
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps, this.props)
    console.log("UPDATE")
    const oldProducts = Object.keys(prevProps.shoppingCart).sort();
    const newProducts = Object.keys(this.props.shoppingCart).sort();
    console.log(oldProducts, newProducts, oldProducts.join() === newProducts.join())
    if (oldProducts.join() !== newProducts.join()) {
      console.log("items changed")
      // const newProductState = []
      // for (product in newProducts) {
      //
      // }
      // this.refreshProducts();
    }
  }

  refreshProducts() {
    const url = SERVER_URL + '/product/getProductByIds';
    const productIds = JSON.stringify(Object.keys(this.props.shoppingCart).map(Number));
    if (productIds.length > 0) {
      axios.get(url, {
        params: {
          productIds: productIds
        }
      })
      .then(res => {
        const products = res.data;
        console.log(products);
        this.setState({products: res.data})
      })
      .catch(err => console.log(err));
    }
  }

  render() {
    const classes = this.props.classes;

    const cartPreview = []
    const products = this.state.products;
    for (var i = 0, len = products.length; i < len; i++) {
      const product = products[i];
      cartPreview.push(
        <div key={i} className={classes.itemBox}>
          <div className={classes.itemImage}>
            IMAGE
          </div>
          <div className={classes.itemName}>
            {product.name.toUpperCase()}
          </div>
          <div className={classes.itemQuantity}>
            {this.props.shoppingCart[product.id]}
          </div>
          <div className={classes.itemPrice}>
            ${product.price}
          </div>
          <IconButton
            disableRipple
            color="primary"
            aria-label="Open drawer"
            onClick={() => this.props.removeFromCart(product.id)} className={classes.itemDelete}
          >
            <MenuIcon />
          </IconButton>
        </div>
      );
    }

    return (
      <div className={classes.shoppingCartBox}>
        {cartPreview}
      </div>
    );
  }
}

export default withStyles(styles)(ShoppingCart);
