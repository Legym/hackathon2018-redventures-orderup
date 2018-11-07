import React from 'react';
import { Button, Layout, Menu, Dropdown, Icon } from 'antd';

const { Header } = Layout;

const MainHeader = (props) => {
  const { locations, context } = props;

  function handleMenuClick(e) {
    context.setLocation(e.key);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      {
        locations.map(location => (
          <Menu.Item key={location.Name}>
            <p>{location.Name}</p>
          </Menu.Item>
          )
        )
      }
    </Menu>
  );

  return(
    <Header
      style={{
        background: '#fff',
        display: 'flex',
        padding: 0,
        marginBottom: '20px',
        paddingRight: '20px',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}
    >
      <h4 style={{
          marginBottom: '0',
          marginRight: '18px'
        }}
      >
        15 Orders in progress
      </h4>

      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" href="#">
          Change Location <Icon type="down" />
        </a>
      </Dropdown>
    </Header>
  )
}

export default MainHeader;
