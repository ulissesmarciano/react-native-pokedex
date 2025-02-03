import { Image } from "react-native";
import styled from "styled-components/native";
import { pokemonTypeStyles } from "../../constants/colors";

export const Container = styled.View`
  background-color: #2b292c;
  flex: 1;
`;
export const AvatarContainer = styled.View`
  position: relative;
  padding-top: 60px;
  padding-bottom: 5px;
  background-color: ${({ pokemonBGColor }) =>
    pokemonTypeStyles[pokemonBGColor]};
  flex: 2;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 50px 50px;
`;

export const Avatar = styled(Image)`
  height: 200px;
  width: 200px;
`;

export const Id = styled.Text`
  position: absolute;
  top: 50px;
  right: 22px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;

export const FirstInfoContainer = styled.View`
  padding: 20px 0;
  align-items: center;
`;

export const PokemonName = styled.Text`
  margin-bottom: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  text-transform: capitalize;
`;

export const TypesContainer = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  gap: 20px;
`;

export const SizeDataContainer = styled.View`
  flex-direction: row;
  gap: 60px;
`;
export const ValueContainer = styled.View`
  gap: 10px;
  align-items: center;
`;

export const SizeValue = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 600;
`;

export const SizeName = styled.Text`
  color: #dbdbdb;
  font-weight: 200;
`;

export const SecondInfoContainer = styled.View`
  flex: 2;
  gap: 20px;
`;

export const StatsTitle = styled.Text`
  align-self: center;
  color: #fff;
  font-size: 24px;
`;

export const ProgressBarContainer = styled.View`
  padding: 0 16px;
  gap: 10px;
`;
