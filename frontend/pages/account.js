import React from 'react';
import { Consumer } from 'store/createContext';
import { Row, Col, Layout } from 'antd';

const { Content } = Layout;

const Account = props => {
  return (
    <div>
      <Content
        style={{
          margin: '24px'
        }}
      >
        <div>
          <Row>
            <Col span={18}>
              <h3>Username: {props.context.state.user.userName}</h3>
              <h3>Email: {props.context.state.user.emailAddress}</h3>
              <h3>firstName: {props.context.state.user.firstName}</h3>
              <h3>LastName: {props.context.state.user.lastName}</h3>
            </Col>
          </Row>
        </div>
      </Content>



    </div>
  )
}

export default () => (
  <Consumer>
    {context => <Account context={context} />}
  </Consumer>
);
