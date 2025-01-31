import { StatusBar } from "react-native";
import styled from "styled-components/native";
import useFetchPokemonData from "../../hooks/useFetchPokemonData";
import Type from "../../components/Type/Type";

import { Image } from "react-native";
import ProgressBar from "../../components/ProgressBar/Progressbar";

const PokeAvatar =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png";

const PokemonScreen = ({ navigation, route }) => {
  //const { name } = route.params;
  const pokemonData = useFetchPokemonData("pikachu");
  console.log(pokemonData);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <AvatarContainer>
        <Avatar source={{ uri: PokeAvatar }} />
      </AvatarContainer>
      <FirstInfoContainer>
        <PokemonName>pikachu</PokemonName>
        <TypesContainer>
          <Type name="electric" typeBackground="fire" variant="secondary" />
          <Type name="electric" typeBackground="fire" variant="secondary" />
        </TypesContainer>
        <SizeDataContainer>
          <ValueContainer>
            <SizeValue>90.5 KG</SizeValue>
            <SizeName>Weight</SizeName>
          </ValueContainer>
          <ValueContainer>
            <SizeValue>1.7 M</SizeValue>
            <SizeName>Height</SizeName>
          </ValueContainer>
        </SizeDataContainer>
      </FirstInfoContainer>
      <SecondInfoContainer>
        <StatsTitle>Base Stats</StatsTitle>
        <ProgressBarContainer>
          <ProgressBar title="hp" />
          <ProgressBar title="atk" />
          <ProgressBar title="def" />
          <ProgressBar title="spd" />
          <ProgressBar title="exp" />
        </ProgressBarContainer>
      </SecondInfoContainer>
    </Container>
  );
};

const Container = styled.View`
  background-color: #363636;
  flex: 1;
`;
const AvatarContainer = styled.View`
  padding-top: 60px;
  padding-bottom: 5px;
  background-color: green;
  flex: 2;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 50px 50px;
`;

const Avatar = styled(Image)`
  height: 200px;
  width: 200px;
`;

const FirstInfoContainer = styled.View`
  padding: 20px 0;
  align-items: center;
`;

const PokemonName = styled.Text`
  margin-bottom: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  text-transform: capitalize;
`;

const TypesContainer = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  gap: 20px;
`;

const SizeDataContainer = styled.View`
  flex-direction: row;
  gap: 60px;
`;
const ValueContainer = styled.View`
  gap: 10px;
  align-items: center;
`;

const SizeValue = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 600;
`;

const SizeName = styled.Text`
  color: #dbdbdb;
  font-weight: 300;
`;

const SecondInfoContainer = styled.View`
  flex: 2;
  gap: 20px;
`;

const StatsTitle = styled.Text`
  align-self: center;
  color: #fff;
  font-size: 24px;
`;

const ProgressBarContainer = styled.View`
  padding: 0 16px;
  gap: 10px;
`;

export default PokemonScreen;
