import React from 'react';
import HeaderGrid from './Header';
import FooterGrid from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import SideMenu from './Sidemenu';
import Context from './Context';
import 'c:/Users/tahmoores19/Documents/GitHub/my-app1/webRate/webrate/src/components/App.css';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    float:'right',
    width:'100%',
    height:'100%',
    fontFamily:'Verdana, Geneva, Tahoma, sans-serif',
    position:'sticky',
    
   
    
  },

}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
<div><HeaderGrid/></div>
       <div><SideMenu/></div>
       <div ><Context/></div>
        
 <div><FooterGrid/></div>
    </div>
    
   
    
  );
}

export default App;
