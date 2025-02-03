import React from "react";
import {
  ItemContainer,
  PokemonAvatar,
  PokemonName,
  PokemonId,
  NameIdContainer,
  PokemonTypeImageContainer,
  TypesContainer,
} from "./styles";

const PokemonCard = ({ onPress, name, type, avatar, id, cardBackground }) => {
  return (
    <ItemContainer onPress={onPress} cardBackground={cardBackground}>
      <NameIdContainer>
        <PokemonName>{name}</PokemonName>
        <PokemonId>{id}</PokemonId>
      </NameIdContainer>
      <PokemonTypeImageContainer>
        <TypesContainer>{type}</TypesContainer>
        <PokemonAvatar source={{ uri: avatar }} />
      </PokemonTypeImageContainer>
    </ItemContainer>
  );
};

export default PokemonCard;
