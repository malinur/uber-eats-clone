import React from "react"
import { RatingsContainer, RestaurantContainer, RestaurantImage, Row, Subtitle, Title } from "./styles"
import { Text, View } from "react-native"
import { useNavigation } from '@react-navigation/native'

export const RestaurantItem = ({restaurant}) => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate('Restaurant', { id: restaurant.id })
  }

  const DEFAULT_IMAGE = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg'
  const rating = restaurant.rating.toFixed(1)
  return (
    <RestaurantContainer onPress={onPress}>
      <RestaurantImage
        source={{ uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE}} style={{aspectRatio: 5/3}}/>
      <Row>
      <View>
        <Title>{restaurant.name}</Title>
        <Subtitle>${restaurant.deliveryFee.toFixed(1)} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Subtitle>
      </View>
        <RatingsContainer>
          <Text>{rating}</Text>
        </RatingsContainer>
      </Row>
    </RestaurantContainer>
  )
}
