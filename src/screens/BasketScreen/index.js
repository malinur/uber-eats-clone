import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import {
  Button,
  ButtonText,
  Container, ItemName,
  Label,
  Name,
  Price,
  Quantity,
  QuantityContainer,
  Row,
  Separator, Total,
} from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import DishListItem from './DishListItem'

const restaurant = restaurants[0]

const BasketScreen = () => {

  return (
    <Container>
      <Name>{restaurant.name}</Name>
      <Label>Your items</Label>
      <FlatList
        style={{flexGrow: 0}}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem basketDish={item} />} />

      <Separator />

      <Row>
        <Total>Total</Total>
        <Price>$xx</Price>
      </Row>
      <Button>
        <ButtonText>Create order</ButtonText>
      </Button>
    </Container>
  )
}

export default BasketScreen
