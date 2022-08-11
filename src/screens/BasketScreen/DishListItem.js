import React from 'react'
import { ItemName, Price, Quantity, QuantityContainer, Row } from './styles'
import { Text } from 'react-native'

const DishListItem = ({basketDish}) => {
  return (
    <Row>
      <QuantityContainer>
        <Quantity>1</Quantity>
      </QuantityContainer>
      <ItemName>{basketDish.name}</ItemName>
      <Price>${basketDish.price}</Price>
    </Row>
  )
}

export default DishListItem
