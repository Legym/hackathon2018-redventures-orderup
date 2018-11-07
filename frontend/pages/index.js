import React from 'react';
import { isEmpty } from 'lodash';
import { Layout, Row, Col, Modal, Select } from 'antd';
import { Consumer } from 'store/createContext';
import MenuContainer from '../components/MenuContainer';
import SideBarMenu from '../components/SideBarMenu';
import MenuHeader from '../components/MenuHeader';

const { Content } = Layout;
const Option = Select.Option;

const Index = props => {
  const currentLocation = props.context.state.currentLocation || [];
  const isCurrentLocation = isEmpty(currentLocation) ? true : false;
  const locations = props.context.state.locations || [];
  const userData = props.context.state.user || {};

  if (Object.keys(userData).length === 0) {
    props.context.login();
  }

  if (locations.length === 0) {
    props.context.setLocations();
  }

  function handleChange(value) {
    props.context.setLocation(value);
    props.context.setMenuItems('All Vendors');
  }

  return (
    <>
      <MenuHeader locations={locations} context={props.context} />

      <Content
        style={{
          margin: '0 16px'
        }}
      >
        <div>
          <Row>
            <Col span={18}>
              <MenuContainer context={props.context} />
            </Col>

            <Col span={6}>
              <SideBarMenu context={props.context} />
            </Col>
          </Row>
        </div>
      </Content>

      <Modal
        title="Please Select a Available Location"
        visible={isCurrentLocation}
      >
        <Select defaultValue="Click Here For Locations" style={{ width: '100%' }} onChange={handleChange}>
          {
            locations.map(location => (
              <Option value={location.Name}>{location.Name}</Option>
            ))
          }
        </Select>
      </Modal>
    </>
  );
}

export default () => (
  <Consumer>
    {context => <Index context={context} />}
  </Consumer>
);
