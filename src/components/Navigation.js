import React from 'react';
import { makeStyles, AppBar, Toolbar,Typography, Button } from '@material-ui/core';
import {Link} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 3,
    display: 'flex',
    flexBasis: '20vw',
    justifyContent: 'flex start',
    alignItems: 'center',
    marginLeft: theme.spacing(2), 
    fontFamily: 'cursive',
    fontWeight: 'bolder',
    fontSize:'25px',
  },
  button: {
    flexGrow: 3,
    display: 'flex',
    flexBasis: '20vw',
    alignItems: 'center',
    marginRight: theme.spacing(4), 
    fontFamily: 'cursive',
    color: 'white',
    fontWeight: 'bold',
    fontSize:'20px',
  },

}));


function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Pokedex
          </Typography>
          <Link to="/Ulubione"><Button className={classes.button}>Ulubione</Button></Link>
          <Link to="/Arena"><Button className={classes.button}>Arena</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
    
  );
}
export default Navigation