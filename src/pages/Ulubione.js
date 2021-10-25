import axios from "axios"
import React, { useState, useEffect } from "react"
import styled from 'styled-components';

import PokemonDetails from "../components/PokemonDetails";

const PokeContainer = styled.div`
    display: flex;
    width: 100vw;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #80ced6;  
`
const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100vw;
    margin: 30px;
    box-shadow: 0 4px 8px 10px rgba(0,0,0,0.2);
`


function Ulubione(){
    const [pokemonFavouriteById, setPokemonFavouriteById] = useState([])
    const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;

    const getFavourites = () => {
        axios.get(`http://localhost:3000/favorites`).then((response) => {
            setPokemonFavouriteById(response.data);
        });
    };
    useEffect(() => {
        getFavourites();
    }, []);
    console.log("favouritesById", pokemonFavouriteById)

    return(
        <PokeContainer>
            <MainContainer>
                {pokemonFavouriteById?.map(({ id }) => (
                    <PokemonDetails
                        url_favourite={`${BASE_URL}/${id}`}
                    ></PokemonDetails>
                ))}
            </MainContainer>    
        </PokeContainer>
    )  
}
export default Ulubione