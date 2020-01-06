import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    float: 'right',
    width: '100%',
    height: '100%',
    marginTop: 0,
    fontFamily:'Verdana, Geneva, Tahoma, sans-serif',
  },
  paperheader: {
    padding: theme.spacing(1),
    textAlign: 'right',
    height: '80px',
    width: '100%',
    top: 0,
    color: theme.palette.text.secondary,
    background: 'linear-gradient(45deg, #85929E  30%, #70C6EE 90%)',
    borderRadius: '0px',
    position: "relative",
    right: 0,
    marginTop: 0,
    fontFamily:'Verdana, Geneva, Tahoma, sans-serif',
  },
  button:{
    float:'right',
    marginTop:'10px',
    marginRight:'110px',
    fontFamily:'Verdana, Geneva, Tahoma, sans-serif',
  },

}));

export default function HeaderGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}  >
        <Grid item xs={12}>
          <Paper className={classes.paperheader}>
            <ButtonGroup size="large" className={classes.button}>
            <Button style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>ورود</Button>
              <Button style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>ثبت نام</Button>
             
            </ButtonGroup>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}