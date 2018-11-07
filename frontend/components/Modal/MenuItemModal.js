import React from 'react';
import { Modal, Button, Checkbox, Divider } from 'antd';
import { Consumer } from '../../store/createContext';

class MenuItemModal extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      visible: false,
    }
  }

  onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  handleOk = item => {
    const { setCustomFilter } = this.props.context;
    const { itemType } = this.props;

    setCustomFilter({...item, itemType });
  }

  showModal = () => { this.setState({ visible: true }) }

  handleCancel = () => { this.setState({ visible: false }) }

  render() {
    const CheckboxGroup = Checkbox.Group;
    const { visible, loading } = this.state;
    const { item } = this.props;
    const options = [];

    // create options from ingredients
    // for (let i=0; i <= item.ingredients.length -1; i++){
    //   options[i] = {
    //     label: item.ingredients[i],
    //     value: item.ingredients[i]
    //   }
    // }

    return (
      <>
        <Button
          type="primary"
          onClick={this.showModal}
          style={{
            width: '100%',
            position: 'absolute',
            left: '0px',
            bottom: '-30px',
            height: '40px',
            borderRadius: 0,
          }}
        >
          View More
        </Button>
        <Modal
          visible={visible}
          title={item.Name}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          style={{ textAlign: 'center' }}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={() => this.handleOk(item)}>
              Add To Cart
            </Button>
          ]}
        >

          <Divider>Description</Divider>
          <p>{item.Description || 'someone forgot to write a description'}</p>

          {/* <Divider>Picky Eaters Look Here</Divider> */}
          {/* <CheckboxGroup options={options} defaultValue={item.ingredients} onChange={this.onChange} /> */}

          <Divider>Price</Divider>
          $
          {item.Price / 100}

        </Modal>
      </>
    );
  }
}

export default props => (
  <Consumer>
    {context => <MenuItemModal {...props} context={context} />}
  </Consumer>
);
