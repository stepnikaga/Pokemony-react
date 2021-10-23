import React, { useState, useEffect }from 'react'
import axios from 'axios';
import styled from "styled-components";
import {useHistory, useParams} from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';

import PokemonDetails from "../components/PokemonDetails";

const ArenaContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vw;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #b2b2b2;

`
const Fight = styled.button`
  margin-top: 150px;
  width: 120px;
  height: 120px;
  background-color: red;
  border: 1px solid;
  border-Radius: 1.5rem;
  font-weight: bolder;
  font-size: 20px;
  cursor: pointer;
`
const FirstPosition = styled.div`
  margin-top: 100px;
  width: 30vw;
  height: 40vw;
  border: 1px solid;
  border-Radius: 1.5rem;
`
const SecondPosition = styled.div`
  margin-top: 100px;
  width: 30vw;
  height: 40vw;
  border: 1px solid;
  border-Radius: 1.5rem;
`
const Card = styled.div`
  display: flex;


`
const Arena = () => {
  const [pokemonAddArenaById, setPokemonAddArenaById] = useState([])
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;

  const getArena = () => {
      axios.get(`http://localhost:3000/arena`).then((response) => {
          setPokemonAddArenaById(response.data);
      });
  };
  useEffect(() => {
      getArena();
  }, []);
  console.log("arenaById", pokemonAddArenaById)

  return(
    <ArenaContainer>
      <FirstPosition>
        <Card> 
          {pokemonAddArenaById?.map((item) => (
              <PokemonDetails
                URL_ARENA={`${BASE_URL}/${item.id}`}
              ></PokemonDetails>
          ))}
        </Card>
      </FirstPosition>
      <Fight variant="contained">FIGHT</Fight>
      <SecondPosition>
        <Card> 
            {pokemonAddArenaById?.map(({id}) => (
                <PokemonDetails
                  url_arena={`${BASE_URL}/${id}`}
                ></PokemonDetails>
            ))}
          </Card>

      </SecondPosition>
    </ArenaContainer>
  )  
}
export default Arena
