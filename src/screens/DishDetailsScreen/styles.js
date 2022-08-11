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
  font-size: 30px;
  font-weight: 600;
  color: black;
  margin: 10px 0 10px 0;
`
export const Description = styled.Text`
  color: grey;
`
export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`
export const Quantity = styled.Text`
  font-size: 25px;
  margin: 0 20px 0 20px;
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
