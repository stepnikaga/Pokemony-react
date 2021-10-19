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
    /* margin: 0 auto; */
    max-width: 70vw;
    max-height: 400px;
    justify-content: center;
    border: 1px solid;
    /* border-radius: 1.0rem; */
    box-shadow: 0 4px 8px 10px rgba(0, 0, 0, 0.2);
    background-color: #fefbd8;
    transition: 0.5s;
`
const Image = styled.img`
    max-width: 60%;
`
const Info = styled.div`
    margin-top: 20px;
    font-family: serif;
    max-height: 40%;
    align-items: center;
`
const Name = styled.div`
    font-family: "Times New Roman", Times, serif;
    font-size: 20px;
    font-weight: bolder;
    color: red;
`
const Abilities = styled.div`
    display: flex;
    justify-content: space-between;
    /* min-height: 10vw; */

`
const Forms = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
` 
const Data = styled.h5`
    margin-top: 0vw;
    font-size: 8px;
`
const Title = styled.h4`
    font-size: 13px;
    margin-top: 0vw;
    color: blueviolet;
`
const Card = ({ url }) => {
        const history = useHistory()
        const [pokemon, setPokemon] = useState([])
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


