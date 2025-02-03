import { StatusBar } from "react-native";
import {Container, Avatar, AvatarContainer, FirstInfoContainer, Id, PokemonName, ProgressBarContainer, SecondInfoContainer, SizeDataContainer, SizeName, SizeValue, StatsTitle, TypesContainer, ValueContainer} from "./styles";
import useFetchPokemonData from "../../hooks/useFetchPokemonData";
import {
  calculateHeight,
  calculateWeight,
  formatId,
  calculateAverageBaseStats
} from "../../utils/pokemonUtils";

import Type from "../../components/Type/Type";
import ProgressBar from "../../components/ProgressBar/Progressbar";

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



export default PokemonScreen;
