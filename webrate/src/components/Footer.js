import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    float:'right',
   width:'100%',
    height:'100%',
    bottom:'0px',
    position:'sticky',
    marginRight:0,
    marginLeft:0,
    
   
    
 },

  paperfooter: {
    padding: theme.spacing(3),
    height:'80px',
     bottom:0,
     position:'sticky',
      background: 'linear-gradient(45deg, #85929E 30%, #70C6EE 90%)',
      
  },
}));

export default function FooterGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={3} >
        <Grid item xs={12}>
          <Paper className={classes.paperfooter}>
       
          </Paper>
        </Grid>
       </Grid>
    </div>
  );
}