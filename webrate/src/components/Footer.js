import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    float:'right',
   width:'100%',
    height:'100%',
    position:"fixed",
    marginBottom:0,
    
    
      },

  paperfooter: {
    padding: theme.spacing(1),
    textAlign: 'right',
    height:'10%',
    width:'100%',
    bottom:0,
    color: theme.palette.text.secondary,
    background:'linear-gradient(45deg, #06ACF9 30%, #70C6EE 90%)',
    borderRadius:'0px',
    position:"fixed",
    right:0,
    marginBottom:0,
    
   
      
  },
}));

export default function FooterGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={3} >
        <Grid item xs={12}>
          <Paper className={classes.paperfooter}>xs=تست</Paper>
        </Grid>
       </Grid>
    </div>
  );
}