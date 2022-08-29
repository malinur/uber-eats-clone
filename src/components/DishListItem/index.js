import React from "react";
import { Image, Text, View } from "react-native";
import { Container, Description, DishImage, Name, Price, TextContainer } from "./styles";
import { useNavigation } from '@react-navigation/native'

const DishListItem = ({dish}) => {
  const navigation = useNavigation()
  return (
    <Container onPress={() => navigation.navigate('Dish', {id: dish.id})}>
      <TextContainer>
      <Name>{dish.name}</Name>
      <Description numberOfLines={2}>{dish.description}</Description>
      <Price>${dish.price}</Price>
      </TextContainer>
      {dish.image && <DishImage style={{ aspectRatio: 1 }} source={{ uri: dish.image }} />}
    </Container>
  );
};

export default DishListItem;
