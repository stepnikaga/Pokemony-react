import './App.css';
import React, { useState, useHistory } from 'react';
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
  const [search, setSearch] = useState("")
  const [value, setValue] = useState(2)
  // const history = useHistory()
  console.log('poki',pokem)

  // const handleClick = (pokemonName) => {
  //   history.push(`/${pokemonName}`)
  // }
  return (
    
    <div className="App">
      <Router>
        <Navigation />
 
        <Switch>

        <Route path="/" exact>
        <div>
          <Search handleClick={(value) => setSearch(value)}/>      
          <PokemonList setPokem={setPokem} />
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

