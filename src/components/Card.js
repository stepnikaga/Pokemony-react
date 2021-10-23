import React, { useState, useEffect }from 'react'
import axios from 'axios';
import styled from "styled-components";
import {useHistory, useParams} from 'react-router-dom'

const Wrapper = styled.div`
    display: flex;
    background-color: #ff6f69;
    height: 400px;
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    justify-content: center;
    border-radius: 0.5rem;
    /* box-shadow: 0 4px 8px 10px rgba(0, 0, 0, 0.2); */
    /* background-color: #ffef96; */
    transition: 0.5s;
`
const Image = styled.img`
    max-width: 7vw;
`
const Info = styled.div`
    margin-top: 20px;
    font-family: serif;
    max-height: 40%;
    align-items: center;
`
const Name = styled.div`
    display: flex;
    justify-content: center;
    font-family: "Times New Roman", Times, serif;
    font-size: 25px;
    font-weight: bolder;
    color: red;
    text-transform: capitalize;
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
    /* margin-bottom: 10px; */
    margin-left: 20px;
` 
const Data = styled.h5`
    display: flex;
    justify-content: center;
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
        <Wrapper>
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
        </Wrapper>
    )
    
}
export default Card


