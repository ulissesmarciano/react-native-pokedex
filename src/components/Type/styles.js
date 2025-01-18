import styled from "styled-components/native";
import { pokemonTypeStyles } from "../../constants/colors";

export const Container = styled.View`
    //padding: 2px 8px;
    padding: ${({variant}) => variant === 'secondary' ? '2px 40px' : '2px 8px'};
    align-items: center;
    justify-content: center;
    background-color: ${({ typeBackground }) => pokemonTypeStyles[typeBackground] || 'rgba(255, 255, 255, 0.25)'};
    border-radius: 10px;
`;

export const TypeName = styled.Text`
    color: #fff;
    text-transform: capitalize;
    font-weight: 600;
`;