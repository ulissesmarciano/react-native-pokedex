import styled from "styled-components/native";
import { Image } from 'expo-image';

export const ItemContainer = styled.TouchableOpacity`
  padding: 20px 8px;
  flex: 1;
  gap: 10px;
  justify-content: space-between;
  background-color: #f9c2ff;
  align-items: center;
  border-radius: 8px;
  `;

export const PokemonTypeImageContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const PokemonName = styled.Text`
  font-size: 18px;
  color: #333;
  text-transform: capitalize;
  font-weight: 700;
`;

export const TypesContainer = styled.View`
  gap: 4px;
`

export const PokemonAvatar = styled(Image)`
  height: 80px;
  width: 80px;
`;


