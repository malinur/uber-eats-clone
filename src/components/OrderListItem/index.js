import React from 'react'
import { Image, Text, View } from 'react-native'
import { Description, Name, RestaurantImage, Row } from '../../screens/OrdersScreen/styles'
import { useNavigation } from '@react-navigation/native'

const OrderListItem = ({order}) => {
  const navigation = useNavigation()

  return (
    <Row onPress={() => navigation.navigate('Order', {id: order.id})}>
      <RestaurantImage source={{uri: order.Restaurant.image}}
      />
      <View>
        <Name>{order.Restaurant.name}</Name>
        <Description>3 items $38.45</Description>
        <Description>2 days ago &#8226; {order.status}</Description>
      </View>
    </Row>
  )
}

export default OrderListItem
