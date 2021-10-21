import './App.css';
import React, { useState, useEffect, useHistory } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Navigation from './components/Navigation';
import Search from './components/Search';
import PokemonList from './pages/PokemonList'
import Card from './components/Card'
import Arena from './pages/Arena';
import Ulubione from './pages/Ulubione';
import PokemonDetails from './components/PokemonDetails';




function App() {
  const [pokem, setPokem] = useState(null)
  // const [pokemon, setPokemon] = useState(null)
  const [search, setSearch] = useState("")
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon`
  // const [value, setValue] = useState(2)
  // const history = useHistory()
  console.log('poki',pokem)


  return (
    
    <div className="App">
      <Router>
        <Navigation />
        <Switch>

        <Route path="/" exact>
        <div>
          <Search handleClick={(value) => setSearch(value)}/>      
          <PokemonList 
            setPokem={setPokem} 
          />
        </div>

        </Route>
        <Route path="/Ulubione">
          <Ulubione />
        </Route>

        <Route path="/Arena">
          <Arena />
        </Route>

        <Route path='/:id'>
          <PokemonDetails />
        </Route> 
        </Switch>
      </Router>
    </div>  
   
  );
}
export default App;

