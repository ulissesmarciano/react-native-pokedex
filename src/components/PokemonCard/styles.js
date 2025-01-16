import styled from "styled-components/native";
import { Image } from 'expo-image';
import { pokemonTypeStyles } from "../../constants/colors";

export const ItemContainer = styled.TouchableOpacity`
  padding: 20px 8px;
  flex: 1;
  gap: 10px;
  justify-content: space-between;
  background-color: ${({ cardBackground }) => pokemonTypeStyles[cardBackground] || '#000'};
  align-items: center;
  border-radius: 8px;
`;

export const NameIdContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonTypeImageContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const PokemonName = styled.Text`
  font-size: 18px;
  color: #fff;
  text-transform: capitalize;
  font-weight: 700;
`;

export const PokemonId = styled.Text`
    color: #fff;
    font-weight: 500;
`;

export const TypesContainer = styled.View`
  gap: 4px;
`;

export const PokemonAvatar = styled(Image)`
  height: 90px;
  width: 90px;
`;


