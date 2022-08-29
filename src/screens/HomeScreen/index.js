import React, { useEffect, useState } from 'react'
import { FlatList } from "react-native"
import { RestaurantItem } from "../../components/RestaurantItem"
import styled from "styled-components/native"
import {DataStore} from 'aws-amplify'
import {Restaurant} from '../../models'

const Container = styled.View`
padding: 0 10px 0 10px;
`

const HomeScreen = () => {
  const [restaurants, setRestaurants] = useState([])

  const fetchRestaurants = async () => {
const result = await DataStore.query(Restaurant)
    setRestaurants(result)
  }

  useEffect(() => {
    fetchRestaurants()
  }, [])

  return (
    <Container>
    <FlatList data={restaurants} renderItem={({ item }) => <RestaurantItem restaurant={item} />}
              showsVerticalScrollIndicator={false} />
    </Container>
  )
}

export default HomeScreen
