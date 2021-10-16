import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 5vw;
  margin-right: 20px;
  background-color: #80ced6;
`

const Search = ({handleClick}) => {
  return (
    <Container>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Znajdź Pokemona"
          inputProps={{ 'aria-label': 'search google maps' }}
          onChange={(e) => handleClick(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
}
export default Search