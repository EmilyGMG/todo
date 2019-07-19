import React, { Component } from 'react';
 

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
 
 
const styles = {
    card: {
        backgroundColor: 'black',
        Width: '100% 100%',
        opacity: 0.8,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};
class Home extends Component {
 
    render() {
        const { classes } = this.props;
        return (
  
            <div >
               
                <Card className={classes.card}>
                    <CardContent>
                  
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

            </div>
         
        );
    }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

