import { StatusBar, FlatList } from 'react-native';
import { Container, PokedexListContainer, PokemonItemWrapper } from './styles';
import useFetchAllPokemons from '../../hooks/useFecthAllPokemons';

import Header from '../../components/PokedexHeader/PokedexHeader';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import Type from '../../components/Type/Type';


const PokedexScreen = ({ navigation }) => {
  const { pokemons, loading, error } = useFetchAllPokemons();
  const NUM_COLUMNS = 2;

  const formatId = (id) => `#${id.toString().padStart(3, "0")}`;
  const formattedData = [...pokemons];
  while (formattedData.length % NUM_COLUMNS !== 0) {
    formattedData.push(null);
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#A40003" />
      <Header />
      <PokedexListContainer>
        <FlatList
          data={pokemons}
          numColumns={NUM_COLUMNS}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item: pokemon }) =>
            pokemon ? (
              <PokemonItemWrapper>
                <PokemonCard
                  name={pokemon?.name}
                  cardBackground={pokemon?.types?.[0].type.name}
                  id={formatId(pokemon.id)}
                  avatar={pokemon?.sprites?.versions?.['generation-v']?.['black-white'].animated?.front_default}
                  onPress={() => navigation.navigate('Pokemon')}
                  type={pokemon?.types.map((type, index) => (
                    <Type
                      name={type?.type?.name}
                      key={index}
                    />
                  ))}
                />
              </PokemonItemWrapper>
            ) : (
              <PokemonItemWrapper />
            )
          }
        />
      </PokedexListContainer>
    </Container>
  );
};

export default PokedexScreen;