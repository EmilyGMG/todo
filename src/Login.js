import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import PropTypes from 'prop-types';
import Cadastro from './Cadastro';
import Hidden from '@material-ui/core/Hidden'
import fire from './config/Fire';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }
    
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
          });
      }
 
    render() {
        const { classes } = this.props;
        return (
            <Router>
                <div className={classes.root}>

                    <Hidden xlUp>
                        <Grid item xs className={classes.marginpaper}>
                            <Paper className={classes.paper}></Paper>
                        </Grid>
                        <Grid item xs className={classes.marginpaper}>
                            <Paper className={classes.paper}></Paper>
                        </Grid>
                        <Grid item xs className={classes.marginpaper}>
                            <Paper className={classes.paper}></Paper>
                        </Grid>
                        <Grid item xs className={classes.marginpaper}>
                            <Paper className={classes.paper}></Paper>
                        </Grid>
                    </Hidden>

                    <Paper className={classes.paper} p={4}>
                        <Grid container direction="column">

                            <Grid item>
                                <Typography variant="subtitle1" mt={1}>
                                    Email
                                 </Typography>
                                <TextField
                                    value={this.state.email} 
                                    onChange={this.handleChange}
                                    type="email" 
                                    name="email" 
                                    id="exampleInputEmail1"
                                    label="ex: jhon@gmail.com"
                                    autoComplete="email"
                                    variant="outlined"
                                    fullWidth
                                />

                                <Typography variant="subtitle1" mt={1}>
                                    Password
                                 </Typography>
                                <TextField
                                    value={this.state.password} 
                                    onChange={this.handleChange} 
                                    type="password" 
                                    name="password" 
                                    class="form-control" 
                                    id="exampleInputPassword1" 
                                    label="Password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>

                            <Grid item mt={1} >
                                <Typography align="right"  >
                                    <Button  type="submit" onClick={this.login} color="primary" variant="contained" className={classes.margin}>Login</Button>
                                    <Typography align="left">
                                        <Button color="primary" variant="contained" href="/cadastro" className={classes.margiin}>Cadastro</Button>
                                    </Typography>
                                </Typography>
                            </Grid>


                        </Grid>
                    </Paper>
                </div>


                <Route path="/cadastro" exact component={Cadastro} />
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
        maxWidth: 500,
    },
    margin: {
        marginTop: 40,

    },
    margiin: {
        marginTop: -60,
    },
    marginpaper: {
        opacity: 0.0,
    },
});

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);