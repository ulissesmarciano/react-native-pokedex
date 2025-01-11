import { View, StatusBar } from 'react-native';
import styled from 'styled-components';
import Header from '../../components/PokedexHeader/PokedexHeader';

const Body = styled(View)`
    background-color: #FF010B;
    height: 100%;
`
const Pokedex = () => {
    return (
        <Body>
            <StatusBar barStyle="light-content" backgroundColor="#A40003" />
            <Header />
        </Body>
    );
};

export default Pokedex;