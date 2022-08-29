import React from 'react'
import { CaptionContainer, Container, MenuTitle, RestaurantImage, Subtitle, Title } from './styles'
import { Text } from 'react-native'

const RestaurantHeader = ({ restaurant }) => {
  const DEFAULT_IMAGE = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg'
  return (
    <Container>
      <RestaurantImage
        source={{ uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE }} style={{ aspectRatio: 5 / 3 }} />
      <CaptionContainer>
        <Title>{restaurant.name}</Title>
        <Subtitle>${restaurant.deliveryFee.toFixed(1)} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Subtitle>
        <MenuTitle>Menu</MenuTitle>
      </CaptionContainer>
    </Container>
  )
}

export default RestaurantHeader
