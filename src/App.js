import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  
} from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import './App.css'
// import Button from '@material-ui/core/Button';
import Login from './Login';
 
import Button from '@material-ui/core/Button';
import fire from './config/Fire';
import Home from './Home';
 
class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {

    const { classes } = this.props;
    return (
      <Router>
  
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Button href="/" color="inherit">
                Login
                </Button>
              {/* <Button href="/cadastro" color="inherit">Cadastro</Button> */}
            </Toolbar>
          </AppBar>

          {this.state.user ? ( <Home />) : (<Login />)}
 

         {/*  <Route path="/cadastro" exact component={Cadastro} />*/}

          <AppBar position="static" className={classes.margiiin}>
            <Toolbar variant="dense">
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Footer
          </Typography>
            </Toolbar>
          </AppBar>
        </div>


      </Router>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: '500',
  },
  margiiin: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
  }

});

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
/*
tela login
 local storage
 cadastro de usuarios
 todolist
*/