import { height } from "@mui/system";
import axios from "axios"
import React, { useState, useEffect } from "react"
import styled from 'styled-components';

import Card from '../components/Card'
import PokemonList from "./PokemonList";

const PageButton = styled.button `
    line-height: 40px;
    margin: 100px 100px 20px 80px; 
    display: inline-block;
    height: 50px;
    width: 130px;
    border: none;
    background-color: #667292;
    box-shadow: 0 4px 8px 10px rgba(0,0,0,0.2);
    text-align: center;
    cursor: pointer;
    padding: 0;
    color: whitesmoke;
 
    text-decoration: none;
    transition: 0.5s;
    &:hover {
        box-shadow: 0 3px 6px 8px rgba(0,0,0,0.2);
        text-decoration: none;
        background-color: #87bdd8;
        color: #282C34;
        border-radius: 1px;
    }
`
const ContainerButton = styled.div`
    display: flex;
    width: 100%;
    max-height: 30%;
    justify-content: center;
`
const MainContainer = styled.div`
    display: flex;
    width: 100%;
    max-height: 50%;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-left: 5px;
    /* background-position ; */


`
const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: space-between;
    justify-content: space-around;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 20px;
    margin-right: 20px;
    max-width: 450px;
    
    
`
const NEXT = 'NASTĘPNA'
const PREV = 'POPRZEDNIA'

function Ulubione({pokemonFavourite}){
    const [pokemon, setPokemon]= useState()
    const [limitValue, setLimitValue] = useState(15)
    const [pageValue, setPageValue] = useState(0)
    const BASE_URL = `https://pokeapi.co/api/v2/pokemon`

    useEffect(() => {
        axios.get(`${BASE_URL}?limit=${limitValue}&offset=${pageValue}`)
            .then(response => {
                setPokemon(response.data)
                // setPokem(response.data.results)
                console.log('dane', response.data)
            })

    },[pageValue, limitValue])
    console.log()

    if(!pokemon){
        alert('Cierpliwości, za chwilę wyskoczą Pokemony...')
    }
    const prevPage = () => {
        if (pageValue === 0) {
            alert('Jesteś na pierwszej stronie :-)')
            return
        }
        setPageValue(pageValue - 16)
        setLimitValue(15)
    }
    const nextPage = () => {
        if (pageValue === 10) {
            alert("Jesteś na ostatniej stronie")
            return
        }
        setPageValue(pageValue + limitValue)
        setLimitValue(15)
    }
    return(
        <div>
            <ContainerButton>
            <h3><PageButton onClick={prevPage}>{PREV}</PageButton><PageButton onClick={nextPage}>{NEXT}</PageButton></h3>
            </ContainerButton>
            <MainContainer>
                <PokemonList />
                {/* {pokemon?.results?.filter((_, index) => index < 15).map(({url}, index) => (
                    <Content>
                        <Card 
                            url={url} 
                            key={index}
                        />
                    </Content>
                ))} */}
            </MainContainer>    
        </div>
    )  
}
export default Ulubione