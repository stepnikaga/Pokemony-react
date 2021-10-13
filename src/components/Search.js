import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';


const FormContainer = styled.form`
  max-width: 40%;
  margin: 10% auto;
  display: flex;
  justify-content: center;
`
// const Paper = styled.div`

// `

function Search () {

  return (

    <Paper
      component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800 }}>  
      <FormContainer>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Szukaj"/>
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </FormContainer>
    </Paper>
  );
}
export default Search