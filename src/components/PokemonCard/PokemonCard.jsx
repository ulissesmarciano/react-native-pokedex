import React from 'react';
import { ItemContainer, PokemonAvatar, PokemonName, PokemonTypeImageContainer, TypesContainer } from './styles'
import Type from '../Type/Type';


const Avatar = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif";

const PokemonCard = () => {
  return (
    <ItemContainer>
      <PokemonName>pikachuuuuuuuu</PokemonName>
      <PokemonTypeImageContainer>
        <TypesContainer>
          <Type />
          <Type />
        </TypesContainer>
        <PokemonAvatar source={{ uri: Avatar }} />
      </PokemonTypeImageContainer>
    </ItemContainer>
  );
};

export default PokemonCard;