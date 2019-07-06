import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

import Home from './Routes/Home';
import Shop from './Routes/Shop';
import Product from './Routes/Product';
import Checkout from './Routes/Checkout';

const styles = theme => ({
  topbar: {
    height: '64px',
    [theme.breakpoints.up('sm')]: {
      height: '112px',
    },
  },
  content: {
    // flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  }
});

class Content extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.content}>
        <div className={classes.topbar}/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/shop/:collection' component={Shop}/>
          <Route
            path='/product/:productId'
            render={(props) =>
              <Product
                addToCart={this.props.addToCart}
                productId={props.match.params.productId}
              />
            }
          />
          <Route path='/checkout'
            render={(props) =>
              <Checkout
                shoppingCart={this.props.shoppingCart}
                removeFromCart={this.props.removeFromCart}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Content);
