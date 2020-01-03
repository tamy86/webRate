import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    float:'right',
    width:'100%',
    position:'fixed',
    top:0,  
    fontFamily:' Verdana, Geneva, Tahoma, sans-serif',
  },
  paperheader: {
    padding: theme.spacing(2),
    textAlign: 'right',
    height:'100%',
    color: theme.palette.text.secondary,
    background:'linear-gradient(45deg, #06ACF9 30%, #70C6EE 90%)',
    borderRadius:'0px',
    top:0,
    right:0,
    fontFamily:' Verdana, Geneva, Tahoma, sans-serif',
  },

}));

export default function HeaderGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Grid container spacing={3} >
        <Grid item xs={12}>
          <Paper className={classes.paperheader}>
          
          </Paper>
        </Grid>
       </Grid>
    </div>
  );
}