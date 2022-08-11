import React, { useState } from 'react'
import { Text, View } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import { Button, ButtonText, Container, Description, Name, Quantity, Row, Separator } from './styles'
import Icon from 'react-native-vector-icons/Ionicons'

const dish = restaurants[0].dishes[0]

const DishDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1)

  const onDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const onIncrease = () => setQuantity(quantity + 1)

  const getTotalPrice = () => {
    return dish.price * quantity
  }
const totalPrice = getTotalPrice().toFixed(2)

  return (
    <Container>
      <Name>{dish.name}</Name>
      <Description>{dish.description}</Description>
      <Separator />

      <Row>
        <Icon name="remove-circle-outline" color="black" size={60} onPress={onDecrease} />
        <Quantity>{quantity}</Quantity>
        <Icon name="add-circle-outline" color="black" size={60} onPress={onIncrease} />
      </Row>

      <Button>
        <ButtonText>Add {quantity}  to basket &#8226; ${totalPrice}</ButtonText>
      </Button>
    </Container>
  )
}

export default DishDetailsScreen
