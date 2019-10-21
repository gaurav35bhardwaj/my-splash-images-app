import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import { setItem  } from '../../utils/helperMethods';

const styles = () => ({
  link: {
    textDecoration: 'none',
  },
});

const handleClick = ({ push }) => {
  setItem("currentUser", null);
  push({
    path : '/'
  });
}

const Header = ({ classes, history }) => (
  <>
    <Typography variant="h4" gutterBottom>
      Splash Images
    </Typography>
    <Grid container spacing={8}>
      <Grid item xs={3}>
        <Link to="/dashboard" className={classes.link}>
          <Button variant="outlined" color="secondary" className={classes.button}>
          Dashboard
          </Button>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link to="/dashboard/view" className={classes.link}>
          <Button variant="outlined" color="secondary" className={classes.button}>
          View Favourites Images
          </Button>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link to="/dashboard/remove" className={classes.link}>
          <Button variant="outlined" color="secondary" className={classes.button}>
          Remove Favourites Images
          </Button>
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Button variant="outlined" color="secondary" className={classes.button} onClick={() => handleClick(history)}>
          Logout
        </Button>
      </Grid>
    </Grid>
  </>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withRouter(withStyles(styles)(Header));
