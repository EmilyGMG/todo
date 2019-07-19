import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import fire from './config/Fire';

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }
    
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
          })
      }
    render() {
        const { classes } = this.props;
        return (
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
                <div className={classes.container}>
                    <Hidden only="lg">
                        <Paper  > </Paper>
                    </Hidden>
                    <Hidden only="sm">
                        <Paper  > </Paper>
                    </Hidden>
                    <Hidden only={['sm', 'lg']}>
                        <Paper  > </Paper>
                    </Hidden>
                </div>
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
                                id="exampleInputEmail1"
                                label="ex: jhon@gmail.com"
                                name="email"
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
                                type="password" name="password" 
                                class="form-control" 
                                id="exampleInputPassword1" 
                                label="Password"
                                autoComplete="current-password"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item mt={1}>
                            <Typography align="right">
                                <Button onClick={this.signup} color="primary" variant="contained" className={classes.margin}>Cadastrar</Button>
                            </Typography>
                        </Grid>

                    </Grid>
                </Paper>
            </div>
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
    marginpaper: {
        opacity: 0.0,
    },
});

Cadastro.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cadastro);

