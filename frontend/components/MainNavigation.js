import React from 'react';
import { Consumer } from 'store/createContext';
import { Menu, Icon } from 'antd';
import Router from 'next/router';

const SubMenu = Menu.SubMenu;

class MainNavigation extends React.Component {

  handleVendorClick = (e) => {
    const { setMenuItems } = this.props.context;
    Router.push('/')
    setMenuItems(e.item.props.children);
  }

  render() {
    const { currentLocation } = this.props.context.state;
    const { Vendors } = currentLocation;

    return (
      <>
        <Menu
          theme="light"
          defaultOpenKeys={['sub1']}
          defaultSelectedKeys={['all']}
          mode="inline"
          style={{ marginTop: '20px' }}
        >
          <SubMenu
            key="sub1"
            title={(
              <span>
                <Icon type="pie-chart" theme="outlined" />
                <span>{currentLocation.Name}</span>
              </span>
            )}
            onClick={this.handleVendorClick}
          >
            <Menu.Item key="all" onClick={(e) => this.handleVendorClick(e)}>All Vendors</Menu.Item>
            {
              Object.keys(currentLocation).length !== 0
              ? (
                Vendors.map(vendor =>
                  <Menu.Item key={vendor.ID}>{vendor.Name}</Menu.Item>
                )
              )
              : ''
            }
          </SubMenu>

          <Menu.Item key="9" onClick={() => Router.push('/account')}>
            <Icon type="user" />
            <span>Account</span>
          </Menu.Item>
        </Menu>
      </>
    )
  }
}

export default () => (
  <Consumer>
    {context => <MainNavigation context={context} />}
  </Consumer>
);
