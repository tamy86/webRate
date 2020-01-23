import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Login from './Login';

const useStyle=makeStyles(theme =>({
  root:{
  backgroundColor:'#F8F9F9',
   height:'530px',
   marginTop:'20px',
   marginRight:'300px',
   width:'75%',
   minWidth:'800px',
  // overflow:'auto',
   position:'sticky',
   float:'right',
   borderRadius:'10px',
   marginBottom:'20px',
   border: '2px solid #D6DBDF',
     }
}));

export default function Context() {
const classes=useStyle();

  return (
    <div  className={classes.root}>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div><Login/></div>       
       
      </Container>
    </React.Fragment>
    </div>
  );
}