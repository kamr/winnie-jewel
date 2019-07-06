import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './Components/Navigation/NavBar';
import Content from './Content'

const styles = {
  root: {
    flexGrow: 1
  }
};


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      shoppingCart: {
        1: 4,
        3: 1,
        4: 2
      }
    };
  }

  shoppingCartSize() {
    var count = 0;
    for (const productId in this.state.shoppingCart) {
      count += this.state.shoppingCart[productId]
    }
    return count
  }

  addToCart(productId) {
    console.log("[ADD"+ productId +"]")
    this.setState(function (prevState) {
      const cartCopy = prevState.shoppingCart;
      cartCopy[productId] = (cartCopy[productId] || 0) + 1;
      return {
        shoppingCart: cartCopy
      }
    });
  }

  removeFromCart(productId) {
    this.setState(function (prevState) {
      const itemsRemoved = prevState.shoppingCart[productId]
      console.log("[REMOVE "+ productId +"] x "+ itemsRemoved)
      const newCart = Object.assign(prevState.shoppingCart)
      console.log("before del", newCart)
      delete newCart[productId]
      console.log("after del", newCart)
      return {
        shoppingCart: newCart,
      }
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NavBar
          shoppingCartSize={this.shoppingCartSize()}
        />
        <Content
          addToCart={this.addToCart.bind(this)}
          removeFromCart={this.removeFromCart.bind(this)}
          shoppingCart={this.state.shoppingCart}
        />
      </div>
    );
  }
}

export default withStyles(styles)(App);
