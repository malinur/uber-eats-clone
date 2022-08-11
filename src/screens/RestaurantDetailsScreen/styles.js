import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'

export const Container = styled.View`
  flex: 1;
`
export const RestaurantImage = styled.Image`
  width: 100%;
`
export const Title = styled.Text`
  font-size: 35px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
  color: black;
`
export const Subtitle = styled.Text`
  font-size: 15px;
  color: grey;
`
export const CaptionContainer = styled.View`
  margin: 10px;
`
export const IconBack = styled(Icon)`
  position: absolute;
  top: 40px;
  left: 10px;
`
export const MenuTitle = styled.Text`
  margin: 20px 0 10px 0;
  font-size: 16px;
  letter-spacing: 0.7px;
  color: black;
`
