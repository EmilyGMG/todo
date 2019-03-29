import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


class Item extends Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <div className="margin">
          <Paper className={classes.root} elevation={8}>
            <Grid container direction="column">
              <List component="nav" className={classes.root}>
                <ListItem button>
                  <ListItemText inset primary="Name" />
                </ListItem>
                <ListItem button>
                  <ListItemText inset primary="E-mail" />
                </ListItem>
              </List>
            </Grid>
          </Paper>
        </div>
        <div className="margin">
          <Paper className={classes.root} elevation={8}>
            <Grid container direction="column">
              <List component="nav" className={classes.root}>
                <ListItem button>
                  <ListItemText inset primary="Name" />
                </ListItem>
                <ListItem button>
                  <ListItemText inset primary="E-mail" />
                </ListItem>
              </List>
            </Grid>
          </Paper>
        </div>
        
 
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

});

Item.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);

