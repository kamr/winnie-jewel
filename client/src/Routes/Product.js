import React from 'react';

import Display from '../Components/Product/Display'

class Product extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     productId: null
  //   }
  // }
  //
  // componentDidMount () {
  //   console.log(this.props)
  //   const { productId } = this.props.match.params;
  //   this.setState({ productId })
  // }

  render() {
    // const productId = this.props.match.params.productId;
    // console.log(this.props)

    return (
      <div>
        <Display
          addToCart={this.props.addToCart}
          productId={this.props.productId}
        />
      </div>
    );
  }
}

export default Product;
