import { height } from "@mui/system";
import axios from "axios"
import React, { useState, useEffect } from "react"
import styled from 'styled-components';

import Card from '../components/Card'
import Search from '../components/Search'


const Container = styled.div`
    /* background-color: #80ced6; */
 
    padding-top: 0%;
`
const PageButton = styled.button `
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
    margin-top: 0%;
    margin-bottom: 5%;
    width: 100%;
    height: 100%;
    justify-content: center;
`

const MainContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vw;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-left: 5px;
`
const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: space-between;
    margin: 40px 40px 20px 20px;
    max-width: 16vw;
    cursor: pointer;
    &:hover {
        box-shadow: 0 3px 3px 5px rgba(0,0,0,0.6);
        text-decoration: none;
        /* background-color: #87bdd8; */
        /* color: #282C34; */
        border-radius: 0.3px;
    }
`
const NEXT = 'NASTĘPNA'
const PREV = 'POPRZEDNIA'

function PokemonList(){
    const [pokemon, setPokemon]= useState()
    const [limitValue, setLimitValue] = useState(15)
    const [pageValue, setPageValue] = useState(0)
    const BASE_URL = `https://pokeapi.co/api/v2/pokemon`

    useEffect(() => {
        axios.get(`${BASE_URL}?limit=${limitValue}&offset=${pageValue}`)
            .then(response => {
                setPokemon(response.data)
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
        setPageValue(pageValue - 15)
        setLimitValue(15)
    }
    const nextPage = () => {
        if (pageValue === 150) {
            alert("Jesteś na ostatniej stronie")
            return
        } else if (pageValue === 135) {
            setLimitValue(1)
        }
        setPageValue(pageValue + 15);
      
    }
    return(
        <Container>
            <ContainerButton>
                <PageButton onClick={prevPage}>{PREV}</PageButton><PageButton onClick={nextPage}>{NEXT}</PageButton>
            </ContainerButton>
            <MainContainer>
                {pokemon?.results?.filter((_, index) => index < 15).map(({url}, index) => (
                    <Content >
                        <Card 
                            url={url} 
                            key={index}
                        />
                    </Content>
                ))}
            </MainContainer>    
        </Container>
    )  
}
export default PokemonList
