import React, { useState, useEffect }from 'react'
import axios from 'axios';
import styled from "styled-components";
import {useHistory, useParams} from 'react-router-dom'


const Wrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  margin: 0 auto;
  width: 80px;
   */
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1 rem 0;
    margin: 0.3rem;
    border: 1px solid;
    border-radius: 1.5rem;
    min-width: 300px;
    box-shadow: 0 4px 8px 10px rgba(0, 0, 0, 0.2);
    background-color: #fefbd8;
    transition: 0.5s;
    min-height: 400px;
`

const Image = styled.img`
    margin-top: 40px;
    max-width: 40%;
`
const Info = styled.div`
    margin-top: 20px;
    font-family: serif;
    max-height: 80%;
    align-items: center;
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
const Forms = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 20px;
` 
const Data = styled.h5`
    margin-top: 1px;
`
const Title = styled.h4`
    font-size: 20px;
`
const Card = ({ url }) => {
        const history = useHistory()
        const [pokemon, setPokemon] = useState([])
        const [addFavorite, setAddFavorite] = useState(true);
        const hasAbility = Array.isArray(pokemon?.abilities)
        const { id } = useParams()
        console.log('id', id)

    useEffect ( async ()=> {
        const response = await axios.get(`${url}`)
        setPokemon(response.data)
    },[url])
    console.log('pokemon', pokemon?.abilities)

    const handleClick = () =>{ history.push(`/${pokemon.id}`)}

    return(
        <>
        {hasAbility && (
        <CardContainer onClick={handleClick} data-name={pokemon.name} >
            <Image alt={pokemon.name} src={pokemon?.sprites?.other.dream_world.front_default} /> 
            <Info>
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
            </Info> 
        </CardContainer>)}
        </>
    )
    
}
export default Card

// 
