import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';

import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import StoreIcon from '@material-ui/icons/Store';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import SchoolIcon from '@material-ui/icons/School';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import InfoIcon from '@material-ui/icons/Info';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import './components.css'

const useStyles = makeStyles({
  root: {
    width:'230px',
    background:'#E5E7E9',
    float:'right',
    marginTop:'90px',
    marginRight:'20px',
    position:'fixed',
    right:10,
    direction:'rtl',
marginBottom:'10px',
borderRadius:'20px',    
  },
  MenuItem:{
      marginTop:10,
  }
});

export default function SideMenu() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem className={classes.MenuItem}>
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <Typography  id="sidemenu" variant="inherit">داشبورد </Typography>
        </MenuItem>
        <Divider />

        <MenuItem className={classes.MenuItem}>
          <ListItemIcon>
            <StoreIcon fontSize="small" />
          </ListItemIcon>
          <Typography id="sidemenu" variant="inherit">فروشگاه ها</Typography>
        </MenuItem>
        <Divider />

        <MenuItem className={classes.MenuItem}>
          <ListItemIcon>
            <EmojiTransportationIcon fontSize="small" />
          </ListItemIcon>
          <Typography id="sidemenu" variant="inherit" noWrap>
            خدمات عمومی
          </Typography>
        </MenuItem>
        <Divider />

        <MenuItem className={classes.MenuItem}>
          <ListItemIcon>
            <LocalHospitalIcon fontSize="small" />
          </ListItemIcon>
          <Typography id="sidemenu" variant="inherit" noWrap>
            پزشکان
          </Typography>
        </MenuItem>
        <Divider />

        <MenuItem className={classes.MenuItem}>
          <ListItemIcon>
            <RestaurantIcon fontSize="small" />
          </ListItemIcon>
          <Typography id="sidemenu" variant="inherit" noWrap>
            رستوران ها
          </Typography>
        </MenuItem>
        <Divider />

        <MenuItem className={classes.MenuItem}>
          <ListItemIcon>
            <SchoolIcon fontSize="small" />
          </ListItemIcon>
          <Typography id="sidemenu" variant="inherit" noWrap>
            دانشگاه ها
          </Typography>
        </MenuItem>

        <Divider />
        <MenuItem className={classes.MenuItem}>
          <ListItemIcon>
            <AccountBalanceIcon fontSize="small" />
          </ListItemIcon>
          <Typography id="sidemenu" variant="inherit" noWrap>
            بانک ها
          </Typography>
        </MenuItem>
        <Divider />
        
        <MenuItem className={classes.MenuItem}>
          <ListItemIcon>
            <InfoIcon fontSize="small" />
          </ListItemIcon>
          <Typography id="sidemenu" variant="inherit" noWrap>
            درباره ما
          </Typography>
        </MenuItem>
        <Divider />

        <MenuItem className={classes.MenuItem}>
          <ListItemIcon>
            <ContactPhoneIcon fontSize="small" />
          </ListItemIcon>
          <Typography id="sidemenu" variant="inherit" noWrap>
          تماس با ما
          </Typography>
        </MenuItem>
        
      </MenuList>
    </Paper>
  );
}