import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import {
  Main,
  ResponsiveTest
} from '@website/components';

import './App.css';

const useStyles = makeStyles(theme => ({
  afro: {
    padding: theme.spacing(2),
    textAlign: theme.textAlign,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    // <div className={classes.afro}>
    <div>
      <Grid 
        container
        direction="column"
        justify="space-evenly"
      >
        <ResponsiveTest />
        {/* <Main /> */}
      </Grid>
    </div>
  );
}

export default App;
