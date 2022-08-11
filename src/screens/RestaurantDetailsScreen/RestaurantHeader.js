import React from 'react'
import { CaptionContainer, Container, MenuTitle, RestaurantImage, Subtitle, Title } from './styles'
import { Text } from 'react-native'

const RestaurantHeader = ({ restaurant }) => {
  return (
    <Container>
      <RestaurantImage
        source={{ uri: restaurant.image }} style={{ aspectRatio: 5 / 3 }} />
      <CaptionContainer>
        <Title>{restaurant.name}</Title>
        <Subtitle>${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Subtitle>
        <MenuTitle>Menu</MenuTitle>
      </CaptionContainer>
    </Container>
  )
}

export default RestaurantHeader
