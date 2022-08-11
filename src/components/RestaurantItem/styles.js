import styled from "styled-components/native"
import { Image } from "react-native"

export const RestaurantContainer = styled.TouchableOpacity`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const RestaurantImage = styled(Image)`
  width: 100%;
  margin-bottom: 5px;
`
export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 5px;
  color: black;
`
export const Subtitle = styled.Text`
  color: grey;
`
export const Row = styled.View`
flex-direction: row;
  align-items: center;
`
export const RatingsContainer = styled.View`
  margin-left: auto;
  background-color: lightgrey;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`
