import React from 'react';
import { isEmpty } from 'lodash';
import { Card, Divider } from 'antd';
import MenuItemModal from './Modal/MenuItemModal'

const { Meta } = Card;

const MenuContainer = (props) => {
  const { menu }= props.context.state

  if (isEmpty(menu)){
    return true
  }

  const styles = {
    width: 220,
    display: 'inline-block',
    margin: 15,
    textAlign: 'center'
  }

  return (
    <>
      <Divider>Entrees</Divider>
      {
        menu.Entrees.map(e => (
          <Card
            style={styles}
            cover={(
              <img
                height="180"
                alt={e.Description}
                src={e.ImgUrl}
              />
            )}
            key={e.id}
          >
            <Meta className="title" title={e.Name} />

            <Meta title={`$${e.Price / 100}`} />

            <MenuItemModal item={e} itemType="entrees" />
          </Card>
        ))
      }

      <Divider>Sides</Divider>
      {
        menu.Sides.map(e => (
          <Card
            style={styles}
            cover={(
              <img
                height="180"
                alt={e.Description}
                src={e.ImgUrl}
              />
            )}
            key={e.id}
            itemType="Sides"
          >
            <Meta className="title" title={e.Name} />

            <Meta title={`$${e.Price / 100}`} />

            <MenuItemModal item={e} itemType="entreeSides" />
          </Card>
        ))
      }

      <Divider>Drinks</Divider>
      {
        menu.Drinks.map(e => (
          <Card
            style={styles}
            cover={(
              <img
                height="200"
                alt={e.Description}
                src={e.ImgUrl}
              />
            )}
            key={e.id}
            itemType="Drink"
          >
            <Meta className="title" title={e.Name} />

            <Meta title={`$${e.Price / 100}`} />

            <MenuItemModal item={e} itemType="drinks" />
          </Card>
        ))
      }

      <style global jsx>
        {`
          .title {
            font-size: 20px;
          }
        `}
      </style>
    </>
  )
}

export default MenuContainer;

