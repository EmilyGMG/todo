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

class Login extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Router>
                <div className={classes.root}>
                    <Paper className={classes.paper} p={4}>
                        <Grid container direction="column">

                            <Grid item>
                                <Typography variant="subtitle1" mt={1}>
                                    Email
                                 </Typography>
                                <TextField
                                    id="outlined-email-input"
                                    label="ex: jhon@gmail.com"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    variant="outlined"
                                    fullWidth
                                />

                                <Typography variant="subtitle1" mt={1}>
                                    Password
                                 </Typography>
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>

                            <Grid item mt={1} >
                                <Typography align="right"  >
                                    <Button color="primary" variant="contained" className={classes.margin} >Submit</Button>
                                    <Typography align="left">
                                <Button color="primary"variant="contained" href="/cadastro"className={classes.margiin}>Cadastro</Button>
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
        marginTop: 200,
        padding: 15,
    },
    margin: {
        marginTop:40,
       
    },
    margiin: {
        marginTop:-55,
    }
});

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);