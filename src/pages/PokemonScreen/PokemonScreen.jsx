import { Image, StatusBar } from "react-native";
import styled from "styled-components/native";
import useFetchPokemonData from "../../hooks/useFetchPokemonData";
import {
  calculateHeight,
  calculateWeight,
  formatId,
  calculateAverageBaseStats
} from "../../utils/pokemonUtils";

import Type from "../../components/Type/Type";
import ProgressBar from "../../components/ProgressBar/Progressbar";
import { pokemonTypeStyles } from "../../constants/colors";

const PokemonScreen = ({ route }) => {
  const { name } = route.params;
  const pokemonData = useFetchPokemonData(name);
  console.log(pokemonData);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <AvatarContainer pokemonBGColor={pokemonData?.types[0].name}>
        <Id>{formatId(pokemonData?.id)}</Id>
        <Avatar
          source={{ uri: pokemonData?.sprites.other.home.front_default }}
        />
      </AvatarContainer>
      <FirstInfoContainer>
        <PokemonName>{pokemonData?.name}</PokemonName>
        <TypesContainer>
          {pokemonData?.types.map((type, index) => (
            <Type
              key={index}
              name={type.name}
              typeBackground={type.name}
              variant="secondary"
            />
          ))}
        </TypesContainer>
        <SizeDataContainer>
          <ValueContainer>
            <SizeValue>{calculateWeight(pokemonData?.weight)} KG</SizeValue>
            <SizeName>Weight</SizeName>
          </ValueContainer>
          <ValueContainer>
            <SizeValue>{calculateHeight(pokemonData?.height)} M</SizeValue>
            <SizeName>Height</SizeName>
          </ValueContainer>
        </SizeDataContainer>
      </FirstInfoContainer>
      <SecondInfoContainer>
        <StatsTitle>Base Stats</StatsTitle>
        <ProgressBarContainer>
          <ProgressBar
            title={"hp"}
            progressBGColor={"#D53A44"}
            progress={pokemonData?.stats[0].base_stat}
            limit={"200"}
          />
          <ProgressBar
            title="atk"
            progressBGColor={"#FEA726"}
            progress={pokemonData?.stats[1].base_stat}
            limit={"200"}
          />
          <ProgressBar
            title="def"
            progressBGColor={"#0191E6"}
            progress={pokemonData?.stats[2].base_stat}
            limit={"200"}
          />
          <ProgressBar
            title="spd"
            progressBGColor={"#8EB0C4"}
            progress={pokemonData?.stats[3].base_stat}
            limit={"200"}
          />
          <ProgressBar
            title="exp"
            progressBGColor={"#388D3C"}
            progress={calculateAverageBaseStats(pokemonData?.stats.map((baseStat) => baseStat?.base_stat))}
            limit={"1000"}
            variant="secondary"
          />
        </ProgressBarContainer>
      </SecondInfoContainer>
    </Container>
  );
};

const Container = styled.View`
  background-color: #2b292c;
  flex: 1;
`;
const AvatarContainer = styled.View`
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

const Avatar = styled(Image)`
  height: 200px;
  width: 200px;
`;

const Id = styled.Text`
  position: absolute;
  top: 50px;
  right: 22px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
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
  font-weight: 200;
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
