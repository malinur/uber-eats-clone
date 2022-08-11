import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 30px 10px 30px 10px
`
export const Separator = styled.View`
  height: 1px;
  background-color: lightgrey;
  margin: 10px 0 10px 0;
`
export const Name = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: black;
  margin: 10px 0 10px 0;
`
export const Label = styled.Text`
  color: black;
  font-weight: 600;
  font-size: 18px;
  padding: 10px 0 10px 0;
`
export const QuantityContainer = styled.View`
  background-color: lightgrey;
  padding: 2px 7px 2px 7px;
  margin-right: 10px;
  border-radius: 3px;
  color: black;
`
export const Quantity = styled.Text`
  color: black;
`
export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 15px 10px 15px 10px;
`
export const Price = styled.Text`
  margin-left: auto;
  color: black;
  font-size: 15px;
`
export const Total = styled.Text`
color: black;
`
export const ItemName = styled.Text`
  font-weight: 600;
  color: black;
  letter-spacing: 0.5px;
  font-size: 15px;
`
export const Button = styled.TouchableOpacity`
  background-color: black;
  margin-top: auto;
  padding: 20px;
  align-items: center;
`
export const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 18px;
`
