import axios from "axios"
import React, { useState, useEffect } from "react"
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import Card from '../components/Card'

const Container = styled.div`
    width: 100vw;
    background-color: #ffef96;
`
const ContainerSearch = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 5vw;
    padding-bottom: 3vw;
    margin-bottom: 4px;
    background-color: #ffef96;
`
const PageButton = styled.button `
    margin: 40px 40px 0px 40px; 
    display: inline-block;
    height: 50px;
    width: 130px;
    border: none;
    background-color: #4040a1;
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
    justify-content: space-between;
    flex-wrap: wrap;
`
const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: space-between;
    margin: 20px 30px 30px 20px;
    box-shadow: 0 1px 6px 12px rgba(0,0,0,0.2);
    cursor: pointer;
    &:hover {
        box-shadow: 0 3px 3px 5px rgba(0,0,0,0.6);
        text-decoration: none;
        border-radius: 0.5px;
    }
`
const NEXT = 'NASTĘPNA'
const PREV = 'POPRZEDNIA'

function PokemonList(){
    const [pokemon, setPokemon]= useState()
    const [limitValue, setLimitValue] = useState(15)
    const [pageValue, setPageValue] = useState(0)
    const [searchValue, setSearchValue] = useState('')
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
            <ContainerSearch>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <InputBase 
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Znajdź Pokemona"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={(e) => {setSearchValue(e.target.value)}}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </ContainerSearch>
  
            <ContainerButton>
                <PageButton onClick={prevPage}>{PREV}</PageButton><PageButton onClick={nextPage}>{NEXT}</PageButton>
            </ContainerButton>
            <MainContainer>
                {pokemon?.results?.filter((pokemon) => {
                    if(searchValue ==='') {
                        return pokemon
                    } else if (pokemon.name.toLowerCase().includes(searchValue.toLowerCase())){
                       return pokemon
                    }})
                    .map(({url}, index) => (
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
