import React from 'react';
import styled from 'styled-components/native';

import Type from '../Type/Type';
import { pokemonTypes } from '../../constants/pokemonTypes';
import { Text } from 'react-native';


const Sidebar = () => {
  return (
    <Container>
        {pokemonTypes.map((type) => (
            <Type 
                name={type.name}
                typeBackground={type.name}
            />
        ))}
    </Container>
  )
}

const Container = styled.View`
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    height: 700px;
    width: 120%;
    background-color: #A40003;
    border-radius: 0 0 0 10px;
`

export default Sidebar
