import React from 'react'
import { FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import restaurants from '../../../assets/data/restaurants.json'
import { Container, IconBack } from './styles'
import DishListItem from '../../components/DishListItem'
import RestaurantHeader from './RestaurantHeader'

const restaurant = restaurants[0]

const RestaurantDetailsScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const id = route.params?.id
  return (
    <Container>
      <FlatList
        ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={item => item.name} />
      <IconBack name="arrow-back-circle" size={45} color="white" onPress={() => navigation.goBack()} />
    </Container>
  )
}

export default RestaurantDetailsScreen
