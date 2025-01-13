import { useState, useEffect } from "react";
import api from "../services/api";

const ueFecthPokemonList = ({ limit = 151 }) => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const response = api.get(`/pokemon?limit=${limit}`);
                setPokemonList((await response).data.reults)
            } catch (error) {
                console.error('Error fetching Pokémon list: ', error)
            }
        };

        fetchPokemonList();
    }, [limit])

    return pokemonList;
};

export default ueFecthPokemonList;
