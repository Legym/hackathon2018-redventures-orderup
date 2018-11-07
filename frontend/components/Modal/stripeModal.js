import React from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import axios from 'axios';
import Swal from 'sweetalert'

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

class StripeModal extends React.Component {

  handleSubmit = (ev) => {
    const { stripe } = this.props;
    ev.preventDefault();

    if (stripe) {
      stripe
        .createToken()
        .then((payload) => this.onSubmit(payload));
    } else {
      Swal('Oops!', 'Stripe not loaded', 'error');
    }
  };

  onSubmit = payload => {
    const { currentLocation, drinks, entreeSides, entrees } = this.props.context.state;
    const { resetSummaryList } = this.props.context;
    if (payload.error) {
      Swal('Oops!', 'Card was not taken', 'error');
    } else {
      axios.post('http://localhost:3000/order', {
        'cardToken': payload.token.id, // GOOD
        'locationId': currentLocation.ID, // GOOD
        'firstName': 'Andrew2', // WAIT FOR AUTH
        'lastName': 'Lake', // WAIT FOR AUTH
        drinks,
        entreeSides,
        entrees
      }, {
        headers: {
          'content-type': 'application/json',
        }
      })
        .then((response) => {
          Swal('Payment Successful!', 'Your payment has been processed!', 'success');
          resetSummaryList();
          this.props.handleOk();
        })
        .catch((error) => {
          Swal('Oops!', error, 'error');
        });
    }
  }

  render() {
    const { fontSize } = this.props;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Card details
            <CardElement
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              onReady={handleReady}
              {...createOptions(fontSize)}
            />
          </label>
          <button className="stripeButton">Pay</button>
        </form>

        <style jsx global>
          {`
            h1 {
              color: #32325d;
              font-weight: 400;
              line-height: 50px;
              font-size: 40px;
              margin: 20px 0;
              padding: 0;
            }

            .Checkout {
              margin: 0 auto;
              max-width: 800px;
              box-sizing: border-box;
              padding: 0 5px;
            }

            label {
              color: #6b7c93;
              font-weight: 300;
              letter-spacing: 0.025em;
            }

            .stripeButton {
              width: 100%;
              white-space: nowrap;
              border: 0;
              outline: 0;
              display: inline-block;
              height: 40px;
              line-height: 40px;
              padding: 0 14px;
              box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
              color: #fff;
              border-radius: 4px;
              font-size: 15px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.025em;
              background-color: #6772e5;
              text-decoration: none;
              -webkit-transition: all 150ms ease;
              transition: all 150ms ease;
              margin-top: 10px;
            }

            form {
              margin-bottom: 40px;
              padding-bottom: 40px;
            }

            .stripeButton:hover {
              color: #fff;
              cursor: pointer;
              background-color: #7795f8;
              transform: translateY(-1px);
              box-shadow: 0 7px 14px rgba(50, 50, 93, .10), 0 3px 6px rgba(0, 0, 0, .08);
            }

            input,
            .StripeElement {
              display: block;
              margin: 10px 0 20px 0;
              max-width: 500px;
              padding: 10px 14px;
              font-size: 1em;
              font-family: 'Source Code Pro', monospace;
              box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
              border: 0;
              outline: 0;
              border-radius: 4px;
              background: white;
            }

            input::placeholder {
              color: #aab7c4;
            }

            input:focus,
            .StripeElement--focus {
              box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px, rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
              -webkit-transition: all 150ms ease;
              transition: all 150ms ease;
            }

            .StripeElement.IdealBankElement,
            .StripeElement.PaymentRequestButton {
              padding: 0;
            }
          `}
        </style>
      </>
    );
  }
}

export default injectStripe(StripeModal);
