import React from 'react';
import { withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FavoriteSelected from '@material-ui/icons/Favorite';
import FavoriteUnselected from '@material-ui/icons/FavoriteBorderTwoTone';
import PropTypes from 'prop-types';
import { getItem, setItem  } from '../../utils/helperMethods'
const styles = {
  root: {
    display: 'flex',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
};

class FavouriteManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: this.isFavourite(),
    };
  }

  isFavourite = () => {
    const { data } = this.props;
    const { userName } = getItem('currentUser');
    const users = getItem('users');
    let currentUserIndex = users.findIndex(item => item.userName === userName);
    let { favourites } = { ...users[currentUserIndex] };
    let result  = favourites.findIndex(item => item.id === data.id);
    if (result > -1){
      return true;
    }
    return false;
  }

  handleClick = () => {
    const { isSelected } = this.state;
    const { data, stateUpdater } = this.props;
    const { userName } = getItem('currentUser');
    const users = getItem('users');
    let currentUserIndex = users.findIndex(item => item.userName === userName);
    let currentUserData = { ...users[currentUserIndex] };
    // remove
    if (isSelected){
      let curreFntUserFav = [...currentUserData.favourites];
      let currentImageIndex = curreFntUserFav.findIndex(item => item.key === data.key);
      curreFntUserFav.splice(currentImageIndex,1);
      currentUserData.favourites = curreFntUserFav;
      users[currentUserIndex] = currentUserData;
      setItem('users', users);
      stateUpdater({ images : [...currentUserData.favourites]})
    } else{
      //add
      currentUserData.favourites.push(data);
      setItem('users', users);
    }
    this.setState({ isSelected: !isSelected });
  }

  render() {
    const { classes } = this.props;
    const { isSelected } = this.state;
    return (
      <div className={classes.root}>
        <IconButton aria-label="add" className={classes.icon} onClick={this.handleClick}>
          {isSelected ? <FavoriteSelected /> : <FavoriteUnselected />}
        </IconButton>
      </div>
    );
  }
}

FavouriteManager.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FavouriteManager);
