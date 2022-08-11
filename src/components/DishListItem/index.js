import React from "react";
import { Image, Text, View } from "react-native";
import { Container, Description, DishImage, Name, Price, TextContainer } from "./styles";

const DishListItem = ({dish}) => {
  return (
    <Container>
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
