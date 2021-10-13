import React, { useState, useEffect }from 'react'
import axios from 'axios';
import styled from "styled-components";
import {useHistory, useParams} from 'react-router-dom'
import {makeStyles} from '@material-ui/core';

import { CallMissedSharp, Style } from '@mui/icons-material';
import { boxSizing } from '@mui/system';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  margin: 0 auto;
  max-width: 1200px;
`;

const useStyles = makeStyles((theme) => ({

    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem 0',
        margin: '0.3rem',
        border: '1px solid #EFEFEF',
        borderRadius: '1.2rem',
        minWidth: '304px',
        textAlign: 'center',
        boxShadow: '0 4px 8px 10px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'mintcream',
        // width: '40%', 
        // height: '50%',
        // border: 'groove', 
        // background: '#fefbd8',
        // boxShadow: '0 4px 8px 10px rgba(0,0,0,0.2)',
         
    },
//     image: {
//         maxWidth: '90%',
//         objectFit: 'cover',
//         width: '50%',
//         height: '100%',
//     },
//     data: {
        
//         display: 'flex',

//     },

//     abilities: {
//       display: 'flex',

//     }, 

//     forms: {

//     },

//     baseExperience: {

//     },

  }));

const Card = ({ url }) => {
        const history = useHistory()
        const classes = useStyles();
        const [pokemon, setPokemon] = useState([])
        const hasAbility = Array.isArray(pokemon?.abilities)
        const { id } = useParams()
        console.log('id', id)

    useEffect ( async ()=>{
        const response = await axios.get(`${url}`)
        setPokemon(response.data)
    },[url])
    console.log('pokemon', pokemon?.abilities)

    return(
        <>
        {hasAbility && (
        <Wrapper onClick={() => history.push(`/pokemon/${id}`)} className='card' className='card' className={classes.card} data-name={pokemon.name} >
            <img className={classes.image} alt={pokemon.name} src={pokemon?.sprites?.back_default} /> 
            <div className={classes.data}>
                <div>
                    <h3>{pokemon.name}</h3>
                </div>
                <div className={classes.abilities}>
                    <div className={classes.forms}>
                        <h5>{pokemon.height}</h5>
                        <h4>Height</h4>
                    </div>
                    <div className={classes.forms}>
                        <h5>{pokemon.baseExperience}</h5>
                        <h4>Base experience</h4>
                    </div>
                </div>
                <div className={classes.abilities}>
                    <div className={classes.forms}>
                        <h5>{pokemon.weight}</h5>
                        <h4>Weight</h4>
                    </div>
                    <div className={classes.forms}>
                        <h4>Ability</h4>
                        {pokemon?.abilities.map(({ ability: { name } }) => (
                        <div>{name}</div>
                    ))}

                    </div>
                </div>
            </div> 
        </Wrapper>)}
        </>
    )
    
}
export default Card

// 
