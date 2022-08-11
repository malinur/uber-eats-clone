import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px 0 10px 0;
  margin: 0 20px 0 20px;
  border-bottom-color: lightgrey;
  border-bottom-width: 1px;
  flex-direction: row;
`
export const Name = styled.Text`
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: black;
`
export const Description = styled.Text`
  color: grey;
  margin-top: 5px; 
  margin-bottom: 5px;
`
export const Price = styled.Text`
  font-size: 16px;
  color: black;
`
export const DishImage = styled.Image`
height: 80px;
`
export const TextContainer = styled.View`
flex: 1;
`

