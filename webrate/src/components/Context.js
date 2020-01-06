import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyle=makeStyles(theme =>({
  root:{
  backgroundColor:'#F8F9F9',
   height:'430px',
   marginTop:'20px',
   marginRight:'380px',
   width:'60%',
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
        <Typography component="div"/>
      </Container>
    </React.Fragment></div>
  );
}