import React, { Component } from 'react';
import axios from 'axios';
import { Provider } from './createContext';
import { vendors } from '/static/vendors.json';
import auth from './../utils/auth';


class AppProvider extends Component {
  constructor() {
    super();

    this.state = {
      entrees: [
        {
          'entreeId': 1,
          'note': ''
        }
      ],
      entreeSides: [
        {
          'sideId': 1,
          'entreeId': 1
        }
      ],
      drinks: [
        {
          'drinkId': 1
        }
      ],
      currentLocation: {},
      locations: [],
      cartItems: [],
      menu: {},
      vendors: vendors || [],
      user: {},
    };
  }

  render() {
    const { children } = this.props;
    const { cartItems } = this.state;

    return (
      <Provider value={{
        state: this.state,
        resetSummaryList: () => {
          this.setState({ cartItems: [] });
        },
        setCustomFilter: item => {
          this.setState({
            cartItems: [
              ...cartItems, item
            ]
          });
        },
        setLocations: () => {
          axios.get('http://localhost:3000/location')
            .then(res => {
              const locations = res.data.Locations;
              this.setState({
                locations
              });
            }).catch(err => console.log(err))
        },
        setLocation: location => {
          const { locations } = this.state;
          const locationData = locations.filter(loc => loc.Name == location);

          this.setState({ currentLocation: locationData[0] })
        },
        setMenuItems: vendorName => {
          const { currentLocation } = this.state;
          let url = 'http://localhost:3000/menu';

          if (vendorName !== 'All Vendors') {
            const vendor = currentLocation.Vendors.filter(vendor => vendor.Name === vendorName);
            const { LocationID, ID } = vendor[0];
            url = `${url}/${LocationID}/${ID}`;
          } else {
            url = `${url}/2`;
          }

          axios.get(url)
            .then(res => {
              this.setState({
                menu: res.data.Menu,
              })
            }).catch(err => console.log(err))
        },
        login: () => {
          const data = auth.login();
          if (data) {
            const user = data.decoded;
            this.setState({
              user
            })
          }
        }
      }}
      >
        {children}
      </Provider>
    );
  }
}

export default AppProvider;
