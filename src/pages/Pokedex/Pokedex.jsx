import { View, StatusBar, FlatList } from 'react-native';
import styled from 'styled-components/native';
import Header from '../../components/PokedexHeader/PokedexHeader';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

const NUM_COLUMNS = 2;

const data = Array.from({ length: 13 }, (_, i) => `Item ${i + 1}`);

const Pokedex = () => {
  const formattedData = [...data];
  while (formattedData.length % NUM_COLUMNS !== 0) {
    formattedData.push(null);
  }

  return (
    <Body>
      <StatusBar barStyle="light-content" backgroundColor="#A40003" />
      <Header />
      <PokedexListContainer>
        <FlatList
          data={formattedData}
          renderItem={({ item }) =>
            item ? (
              <PokemonItemWrapper>
                <PokemonCard title={item} />
              </PokemonItemWrapper>
            ) : (
              <PokemonItemWrapper />
            )
          }
          numColumns={NUM_COLUMNS}
          keyExtractor={(item, index) => index.toString()}
        />
      </PokedexListContainer>
    </Body>
  );
};

const Body = styled(View)`
  background-color: #FF010B;
  height: 100%;
`;

const PokedexListContainer = styled(View)`
  margin: 14px;
  flex: 1;
  background-color: #363636;
  border-width: 1px;
  border-color: #000;
  border-radius: 10px;
`;

const PokemonItemWrapper = styled(View)`
  flex: 1;
  margin: 6px;
  max-width: 50%;
`;

export default Pokedex;