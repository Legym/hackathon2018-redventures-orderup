import React from 'react';
import { Button, Modal } from 'antd';
import StripeModal from './Modal/stripeModal';

class SideBarMenu extends React.Component {
  constructor() {
    super();

    this.state = { visible: false }
  }

  showModal = () => {
    this.setState({ visible: true });
  }

  handleOk = (e) => {
    this.setState({ visible: false });
  }

  handleCancel = (e) => {
    this.setState({ visible: false });
  }


  render() {
    const { context } = this.props;
    const { cartItems } = this.props.context.state;
    return (
      <>
        <div className="sideBarContainer">
          <h2>Summary:</h2>
          {
            cartItems.map(index => (
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#000' }} key={index.ID}>
                ${index.Price / 100}
                {' '}
                -
                {' '}
                {index.Name}
              </p>
            ))
          }
        </div>

        <Button
          block
          type="primary"
          style={{
            position: 'absolute',
            bottom: 0,
            height: '50px',
          }}
          onClick={this.showModal}
        >
          Check out
        </Button>

        <Modal
          title="Checkout Cart"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <StripeModal handleOk={this.handleOk} context={context} />
        </Modal>


        <style global jsx>
          {`
            .sideBarContainer {
              background-color: #fff;
              height: 70vh;
              max-height: 500px;
              padding: 20px;
            }
          `}
        </style>
      </>
    )
  }
}

export default SideBarMenu;

