import React from 'react';
import { Layout } from 'antd';
import MainNavigation from './MainNavigation';

class MainLayout extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: false,
    };
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  }

  render() {
    const { children } = this.props;
    const { collapsed } = this.state;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
        >
          <img className="logo" alt="Order Up Logo" src="../static/images/logos/OrderUp-logo.svg" />
          {!collapsed &&
            <img className="logo__text" alt="Order Up Logo" src="../static/images/logos/OrderUp-text.svg" />
          }
          <MainNavigation />

        </Layout.Sider>

        <Layout style={{ minHeight: '100vh', marginBottom: '40px', overflowX: 'inherit' }}>
          {children}
        </Layout>

        <style global jsx>
          {`
            .logo {
              margin-top: 10px;
              width: 65%;
              display: block;
              margin-left: auto;
              margin-right: auto
            }
            .logo__text {
              width: 65%;
              display: block;
              margin-left: auto;
              margin-right: auto
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default MainLayout;
