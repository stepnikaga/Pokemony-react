import { height } from "@mui/system";
import axios from "axios"
import React, { useState, useEffect } from "react"
import styled from 'styled-components';

import Card from '../components/Card'
import PokemonDetails from "../components/PokemonDetails";
import PokemonList from "./PokemonList";

const MainContainer = styled.div`
    display: flex;
    width: 100%;
    max-height: 50%;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-left: 5px;
    /* background-position ; */
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
        <div>
            <MainContainer>
                {pokemonFavouriteById?.map(({ id }) => (
                    <PokemonDetails
                        pokemonDetails={{ url: `${BASE_URL}/${id}` }}
                        pokemonFavouriteById={pokemonFavouriteById}
                    ></PokemonDetails>
                ))}
            </MainContainer>    
        </div>
    )  
}
export default Ulubione