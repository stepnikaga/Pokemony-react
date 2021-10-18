import React, { useState, useEffect }from 'react'
import axios from 'axios';
import styled from "styled-components";
import {useHistory, useParams} from 'react-router-dom'
import {makeStyles} from '@material-ui/core';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';

import { CallMissedSharp, Style } from '@mui/icons-material';
import { boxSizing } from '@mui/system';


const Container = styled.div`
  display: flex;
  padding: 20px 40px;
  margin-top: 4vw;
  margin-left: 40vw;

`
const Wrapper = styled.div`
  display: flex;
  align-content: center;
  margin: 0 auto;
  padding-top: 1%;
  margin-top: 5%;
  margin-bottom: 10%;
  flex-direction: column;
  align-Items: center;
  justify-Content: center;
  padding: 1 rem 0;
  margin: 0.3rem;
  border: 1px solid;
  border-Radius: 1.5rem;
  max-width: 300px;
  -height: 400px;
  text-Align: center;
  box-Shadow: 0 4px 8px 10px rgba(0, 0, 0, 0.2);
  background-color: #fefbd8;
`
const Title = styled.h4`
  font-size: 20px;
`
const Icon = styled.div`
  color: red;
  margin-bottom: 20px;
    
`
const Forms = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: 20px;
` 
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`
const Name = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-size: 30px;
  font-weight: bolder;
  color: red;
`
const Abilities = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 23px;
`

const Image = styled.img`
  margin-top: 5px;
  margin-bottom: 10px;
  width: 250px;
  padding: 10px 20px;
`
const Info = styled.div`
  margin-top: 20px;
  font-family: serif;
  max-height: 80%;
  align-items: center;
`
const Data = styled.h5`
  margin-top: 1px;
`

const PokemonDetails = () => {
  const history = useHistory()
  const [pokemon, setPokemon] = useState([])
  const [pokemonFavourite, setPokemonFavourite] = useState(null)
  const [flag, setFlag] = useState(false)
  const hasAbility = Array.isArray(pokemon?.abilities)
  const { id } = useParams()
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon`
  console.log('id2', id)

  useEffect ( async () => {
    const response = await axios.get(`${BASE_URL}/${id}`)
    setPokemon(response.data)
  },[])
  console.log('pokemony', pokemon)

  useEffect(() => {
    const pokemonFavouriteFlag = pokemonFavourite?.includes(pokemon?.id)
    if(pokemonFavouriteFlag === true) {
      setFlag(true)
    } else if (pokemonFavouriteFlag === false) {
      setFlag(false)
    }
  },[pokemonFavourite])


  const handleAddFavourite = () => {
    if (flag === false) {
      axios.post(('http://localhost:3000/favorites'), {
        sprite: pokemon.sprites.other.dream_world.front_default,
        species: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        baseExperience: pokemon.base_experience,
        ability: pokemon?.abilities.map(({ ability: { name } }) => ({name})),
        id: pokemon.id
      })
        setFlag(true)
      } else if (flag === true) {
        axios.delete(`http://localhost:3000/favorites/${pokemon.id}`)
          .then(response => console.log(response.data))
          setFlag(false)            
      }
    }

  const handleAddArena = () => {

        
  }

  return(
    <Container>
      {hasAbility && (
      <Wrapper data-name={pokemon.name} >
        <Image alt={pokemon.name} src={pokemon?.sprites?.other.dream_world.front_default} /> 
        <Info>
          <Icon pokemonFavourite={pokemonFavourite} onClick={() => handleAddFavourite()}><FavoriteIcon /></Icon>
          <Icon pokemonFavourite={pokemonFavourite} onClick={() => handleAddFavourite()}>< SportsKabaddiIcon/></Icon>
            <div>
              <Name>{pokemon.name}</Name>
            </div>
          <Abilities>
            <Forms>
              <Title>Height</Title>
              <Data>{pokemon.height}</Data>
            </Forms>
            <Forms>
              <Title>Base experience</Title>
              <Data>{pokemon.base_experience}</Data>
            </Forms>
          </Abilities>
          <Abilities>
            <Forms>
              <Title>Weight</Title>
              <Data>{pokemon.weight}</Data>
            </Forms>
            <Forms>
              <Title>Ability</Title>
              {pokemon?.abilities.map(({ ability: { name } }) => (
                <Data>{name}</Data>
              ))}
            </Forms>
          </Abilities>
          <BtnContainer>
            <button onClick={() => history.push(`/`)} variant="contained">Strona Główna</button>
          </BtnContainer>
        </Info>  
      </Wrapper>)}
    </Container>
  )
}
export default PokemonDetails
  /* color: ${({ flag }) => (count % 5 === true && count !=== false ? "green" : "red")}; */