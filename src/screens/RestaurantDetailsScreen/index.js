import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DataStore } from 'aws-amplify'
import { Restaurant, Dish } from '../../models'

import { Container, IconBack } from './styles'
import DishListItem from '../../components/DishListItem'
import RestaurantHeader from './RestaurantHeader'

const RestaurantDetailsScreen = ({}) => {
  const [restaurant, setRestaurant] = useState(null)
  const [dishes, setDishes] = useState([])

  const route = useRoute()
  const navigation = useNavigation()

  const id = route.params?.id

  const fetchRestaurant = async (id) => {
    const result = await DataStore.query(Restaurant, id)
    setRestaurant(result)
  }
  const fetchDish = async (id) => {
    const result = await DataStore.query(Dish, (dish) => dish.restaurantID('eq', id))
    setDishes(result)
  }

  useEffect(() => {
    fetchRestaurant(id)
    fetchDish(id)
  }, [])

  if (!restaurant) {
    return <ActivityIndicator size={'large'} color="gray" />
  }
  return (
    <Container>
      <FlatList
        ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
        data={dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={item => item.name} />
      <IconBack name="arrow-back-circle" size={45} color="white" onPress={() => navigation.goBack()} />
    </Container>
  )
}

export default RestaurantDetailsScreen
