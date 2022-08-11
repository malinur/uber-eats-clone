import React from "react"
import { RatingsContainer, RestaurantContainer, RestaurantImage, Row, Subtitle, Title } from "./styles"
import { Text, View } from "react-native"
import { useNavigation } from '@react-navigation/native'

export const RestaurantItem = ({restaurant}) => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate('Restaurant', { id: restaurant.id })
  }
  return (
    <RestaurantContainer onPress={onPress}>
      <RestaurantImage
        source={{ uri: restaurant.image}} style={{aspectRatio: 5/3}}/>
      <Row>
      <View>
        <Title>{restaurant.name}</Title>
        <Subtitle>${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Subtitle>
      </View>
        <RatingsContainer>
          <Text>{restaurant.rating}</Text>
        </RatingsContainer>
      </Row>
    </RestaurantContainer>
  )
}
