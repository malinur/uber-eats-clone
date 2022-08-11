import React from 'react'
import { FlatList, View } from 'react-native'

import orders from '../../../assets/data/orders.json'
import restaurants from '../../../assets/data/restaurants.json'
import { CaptionContainer, Container, MenuTitle, RestaurantImage, Subtitle, Title } from './styles'
import DishListItem from '../BasketScreen/DishListItem'
import OrderDetailHeader from './OrderDetailHeader'
import OrderListItem from '../../components/OrderListItem'

const restaurant = restaurants[0]
const order = orders[0]

const OrderDerailsScreen = () => {
  return (
    <Container>
    <FlatList
      ListHeaderComponent={() => <OrderDetailHeader order={order}/>}
      style={{flexGrow: 0}}
      data={restaurant.dishes}
      renderItem={({ item }) => <DishListItem basketDish={item} />} />
    </Container>
  )
}

export default OrderDerailsScreen
