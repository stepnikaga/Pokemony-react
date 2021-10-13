import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Navigation from './components/Navigation';
import Search from './components/Search';
import PokemonList from './pages/PokemonList'
import Card from './components/Card'
import Arena from './pages/Arena';
import Ulubione from './pages/Ulubione';




function App() {
  const [pokem, setPokem] = useState(null)
  console.log('poki',pokem)

  return (
    
    <div className="App">
      
      <Navigation />
      <div>
        <Search />
        <PokemonList />
      </div>

      <Route path="/Ulubione">
        <Ulubione />
      </Route>

      <Route path="/Arena">
        <Arena />
      </Route>
      
      <Route path="/PokemonList">
        <PokemonList setPokem={setPokem} />
      </Route>
      {/* {pokem?.map(({id, name, image, height, weight, ability, baseExperience }) => ( */}
      <Route path='/pokemon/:id'>
        <Card 
          url={pokem?.url}
        />
      </Route> 
      

    </div>  
   
  );
}

export default App;
