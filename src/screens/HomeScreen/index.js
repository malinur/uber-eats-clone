import React from "react"
import { FlatList } from "react-native"
import restaurants from "../../../assets/data/restaurants.json"
import { RestaurantItem } from "../../components/RestaurantItem"
import styled from "styled-components/native"

const Container = styled.View`
padding: 10px;
`

const HomeScreen = () => {
  return (
    <Container>
    <FlatList data={restaurants} renderItem={({ item }) => <RestaurantItem restaurant={item} />}
              showsVerticalScrollIndicator={false} />
    </Container>
  )
}

export default HomeScreen
