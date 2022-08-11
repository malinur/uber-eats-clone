import React from 'react'
import { FlatList, View } from 'react-native'
import { Container } from './styles'
import orders from '../../../assets/data/orders.json'
import OrderListItem from '../../components/OrderListItem'

const OrdersScreen = () => {
  return (
    <Container>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />} />
    </Container>
  )
}

export default OrdersScreen
