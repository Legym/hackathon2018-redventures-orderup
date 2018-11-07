import React from 'react';
import App, { Container } from 'next/app';
import { StripeProvider, Elements } from 'react-stripe-elements';
import AppProvider from 'store/provider';
import Layout from '../components/MainLayout';

class MyApp extends App {
  constructor() {
    super();
    this.state = { stripe: null };
  }

  componentDidMount() {
    // This is required to bypass SSR
    this.setState({ stripe: window.Stripe('pk_test_eoHXOnui5XWlEbZbmf6GxBLs') });
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <StripeProvider stripe={this.state.stripe}>
          <Elements>
            <AppProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AppProvider>
          </Elements>
        </StripeProvider>
      </Container>
    )
  }
}

export default MyApp
