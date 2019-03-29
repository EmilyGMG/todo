import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

class Cadastro extends Component {

    render() {
        const { classes } = this.props;
        return (

            <div className={classes.root}>
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
                                Name
                  </Typography>

                            <TextField
                                id="standard-password-input"
                                label="Name"
                                variant="filled"
                                className={classes.textField}
                                type="password"
                                autoComplete="Name"
                                fullWidth
                            />

                            <Typography variant="subtitle1" mt={1}>
                                Email
                  </Typography>

                            <TextField
                                variant="filled"
                                id="outlined-email-input"
                                label="ex: jhon@gmail.com"
                                type="email"
                                name="email"
                                autoComplete="email"
                                fullWidth
                            />

                            <Typography variant="subtitle1" mt={1}>
                                Password
                  </Typography>
                            <TextField
                                variant="filled"
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                fullWidth
                            />
                        </Grid>

                        <Grid item mt={1}>
                            <Typography align="right">
                                <Button color="primary" variant="contained" className={classes.margin} >Submit</Button>
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
        maxWidth: 600,
        marginTop: 200,
        padding: 15,
    },
    margin: {
        marginTop:40,
       
    },
});

Cadastro.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cadastro);

