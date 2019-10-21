import React, {Component} from 'react';
import { withStyles, CircularProgress } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import PropTypes from 'prop-types';
import FavouriteManager from '../FavouriteManager';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: 15,
  },
  gridList: {
    width: 'auto',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  loader: {
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class CoustomGridList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      images: props.data ? props.data : [],
      isLoading: false,
    };
  }
  
  componentDidMount() {
    const { data } = this.props;
    if(!data){
      this.setState({ isLoading : true });
      fetch('https://api.unsplash.com/photos/?client_id=33b25fa5f471d82defcd9420c5398666c0de3bbf588060b6acc3a724824fb32b')
      .then(res => {
        this.setState({ isLoading : false });
        return res.json();
      })
      .then(data => {
        this.setState({ images: data });
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
    }
  }

  stateUpdater = (updatedState) => {
    this.setState({ ...updatedState });
  };
  
  render(){
    const { classes, showHeart } = this.props;
    const { images, isLoading } = this.state;
    if (isLoading) {
      return (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      )
    }
    if (images.length === 0){
      return <h1>No Data...</h1>
    }
    return (
      <div className={classes.root}>
        <GridList cellHeight={180} cols={images.length >= 4 ? 4 : images.length} className={classes.gridList}>
          {images.map(item => {
              const { id, alt_description, description, urls: { small } } = item
                return (
                    <GridListTile key={id}>
                      <img src={small} alt={description ? description : alt_description} />
                      <GridListTileBar
                        title={description? description : alt_description}
                        subtitle={(
                          <span>
                            {description ? description : alt_description}
                          </span>
                        )}
                        actionIcon={(
                          showHeart ? <FavouriteManager data={item} stateUpdater={this.stateUpdater} /> : null
                        )}
                      />
                    </GridListTile>
                );
            })
          }
        </GridList>
      </div>
    );
  }
};

CoustomGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};
CoustomGridList.defaulrProps = {
  data: null,
  showHeart: false
};

export default withStyles(styles)(CoustomGridList);


