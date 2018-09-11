import React from 'react';
import axios from 'axios';
import {injectStripe, CardElement, Elements, StripeProvider} from 'react-stripe-elements';

import STRIPE_PUBLISHABLE from '../../Constants/stripe';
import PAYMENT_SERVER_URL from '../../Constants/server';

import './Checkout.css'


const handleBlur = () => {
  console.log('[blur]');
};
const handleChange = (change) => {
  console.log('[change]', change);
};
const handleClick = () => {
  console.log('[click]');
};
const handleFocus = () => {
  console.log('[focus]');
};
const handleReady = () => {
  console.log('[ready]');
};

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
        padding,
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

const successPayment = data => {
  console.log('Payment Successful');
};

const errorPayment = data => {
  console.log('Payment Error');
};

class _CardForm extends React.Component {
  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken({name: "Test Name"})
        .then((result) => {
          console.log('[token]', result);
          const token = result.token;
          const token_id = token.id;
          console.log(token);
          console.log(token_id);
          const url = PAYMENT_SERVER_URL + '/payment'
          axios.post(url,
            {
              source: token_id,
              currency: "USD",
              amount: "122"
            })
            .then(successPayment)
            .catch(errorPayment);
        })
        // SHOULD THE THEN/CATCH BE OUTSIDE THE THEN?
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Card details
          <CardElement
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <button>Pay</button>
      </form>
    );
  }
}
const CardForm = injectStripe(_CardForm);

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      elementFontSize: window.innerWidth < 450 ? '14px' : '18px',
    };
    window.addEventListener('resize', () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
        this.setState({elementFontSize: '14px'});
      } else if (
        window.innerWidth >= 450 &&
        this.state.elementFontSize !== '18px'
      ) {
        this.setState({elementFontSize: '18px'});
      }
    });
  }

  render() {
    const {elementFontSize} = this.state;
    return (
      <StripeProvider apiKey="pk_test_zgUxPsuel1lgED4695WkRu7q">
        <div className="Checkout">
          <h1>Checkout</h1>
          <Elements>
            <CardForm fontSize={elementFontSize} />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Checkout;
