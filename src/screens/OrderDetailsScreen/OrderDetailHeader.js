import React from 'react'
import { CaptionContainer, Container, MenuTitle, RestaurantImage, Subtitle, Title } from './styles'

const OrderDetailHeader = ({order}) => {
  return (
    <>
      <RestaurantImage
        source={{ uri: order.Restaurant.image }} style={{ aspectRatio: 5 / 3 }} />
      <CaptionContainer>
        <Title>{order.Restaurant.name}</Title>
        <Subtitle>{order.status} &#8226; 2 days ago</Subtitle>
        <MenuTitle>Your order</MenuTitle>
      </CaptionContainer>
    </>
  )
}

export default OrderDetailHeader
