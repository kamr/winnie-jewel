import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';
import SERVER_URL from '../../Constants/server';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  description: {
  },
  image: {
    height: 600,
  },
  img: {
    height: '100%'
  },
  textBox: {
    textAlign: 'center'
  },
  text: {
    padding: '10px'
  },
  button: {
    marginTop: '10px'
  }
});

class Display extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      productName: null,
      productCollection: null,
      productDescription: null,
      productType: null,
      productPrice: null
    }
  }

  componentWillMount() {
    const url = SERVER_URL + '/product/getProduct';
    const productId = this.props.productId
    axios.get(url, {
      params: {
        productId: productId
      }
    })
    .then(res => {
      const product = res.data;
      console.log(product)
      this.setState({
        productName: product.name.toUpperCase(),
        productCollection: product.collection.toUpperCase(),
        productDescription: product.description.toUpperCase(),
        productPrice: product.price
      }, () => console.log("state", this.state));
    })
    .catch(err => console.log(err));
  }

  render () {
    const classes = this.props.classes;
    // console.log(this.props)

    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
        spacing={40}
      >
        <Grid
          container
          item
          justify="center"
          xs={12}
          md={7}
          className={classes.image}
        >
          <img
            className={classes.img}
            alt="jewellery"
            src={SERVER_URL + '/images/test.png'}
          />
        </Grid>
        <Grid
          container
          justify="center"
          direction="column"
          item
          xs={12}
          md={5}
        >
          <div className={classes.textBox}>
            <div className={classes.text}>{this.state.productName}</div>
            <div className={classes.text}>{this.state.productCollection} COLLECTION</div>
            <div className={classes.text}>{this.state.productDescription}</div>
            <div className={classes.text}>${this.state.productPrice}</div>
            <Button
              className={classes.button}
              onClick={() => this.props.addToCart(this.props.productId)}
            >Purchase
            </Button>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Display);
