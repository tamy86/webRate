import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: 'yellow',
    height: '450px',
    marginTop: '60px',
    marginRight: '80px',
    width: '400px',

    // minWidth:'800px',
    // overflow:'auto',
    // position:'sticky',
    float: 'right',
    borderRadius: '10px',
    // marginBottom:'20px',
    // border: '2px solid #D6DBDF',
  },
  Titletextlogin: {
    float: 'auto 0px',
    color: 'blue',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    direction: 'ltr',

  },
  Textfiledstyl: {
    float: 'auto 0px',
    marginRight: '0px',
    marginTop: '60px',
    direction: 'rtl',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    textAlignmetn: 'rtl',
  },
  Label: {
    direction: 'rtl',
  }
}));

export default function Context() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">

          <Typography variant="h4" component="h4" className={classes.Titletextlogin}>
            Login

            </Typography>
          <br />
          <Divider />
          <FormGroup>
            <TextField LabelProps={{ className: classes.Label }} className={classes.Textfiledstyl} label="نام کاربری" variant="outlined"></TextField>
            <TextField type='password' LabelProps={{ className: classes.Label }} className={classes.Textfiledstyl} label="رمز عبور" variant="outlined"></TextField>
            <br />
            <Button variant="contained" color="primary" disableElevation>
              وروود
            </Button>
            <br />
            <Button variant="contained" color="primary" disableElevation>
              رمز ام را فراموش کرده ام
            </Button>

          </FormGroup>

        </Container>
      </React.Fragment>
    </div>
  );
}