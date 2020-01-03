import React from 'react';
import HeaderGrid from './Header';
import FooterGrid from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import SideMenu from './Sidemenu';
import 'c:/Users/tahmoores19/Documents/GitHub/my-app1/webRate/webrate/src/components/App.css';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    float:'right',
    width:'100%',
    height:'100%',
    scrollBehavior:'auto',
    fontFamily:'Verdana, Geneva, Tahoma, sans-serif',
    
  },
  button: {
    margin: theme.spacing(1),
    float:'right',
    fontFamily:'Verdana, Geneva, Tahoma, sans-serif',
  },
}));

function Headerbutton(){
  const classesbutton = useStyles();
  return(
  <div className={classesbutton.button}>
  <ButtonGroup  size="large" variant="outlined" color="defulalt" fontFamily="Verdana, Geneva, Tahoma, sans-serif" >
        
        <Button id="fontbuttonheader">ثبت نام <PeopleOutlineIcon/></Button>
        <Button id="fontbuttonheader">ورود <LockOpenIcon/></Button>
      </ButtonGroup>
      </div>
      );
}

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <HeaderGrid/>
    
    <FooterGrid/>
    <Headerbutton/>
    <SideMenu/>
    </div>
  );
}

export default App;
