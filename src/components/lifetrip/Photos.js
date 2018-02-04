import React, { Component } from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { Col } from 'react-bootstrap';
import { GridList, GridTile } from 'material-ui/GridList';
import * as lifetripActions from '../../actions/lifetripActions';

class Photos extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getPhotos();
  }
  render() {
    const { photos } = this.props;
    // let PostsJs = photos && photos.toJS();
    console.log(photos, 'ddddd');

    const styles = {
      root: {
        margin: '30px',
        float: 'left',
      },
      gridList: {
        width: 300,
        height: 500,
        overflowY: 'auto',
      },
    };

    return (
      <Col xs={6} md={4}>
        <div style={styles.root}>
          <GridList cols={2} cellHeight={150} padding={1} style={styles.gridList}>
            {photos &&
              photos.map(x => (
                <GridTile
                  key={x.get('id')}
                  title={x.get('title')}
                  actionPosition="left"
                  titlePosition="top"
                  titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                  cols={x.get('featured') ? 2 : 1}
                  rows={x.get('featured') ? 2 : 1}
                >
                  <img src={x.get('image')} alt="" />
                </GridTile>
              ))}
          </GridList>
        </div>
      </Col>
    );
  }
}

export default withRouter(
  connect(
    state => {
      return {
        photos: state.lifetrip.get('photos'),
      };
    },
    dispatch => ({
      actions: bindActionCreators(lifetripActions, dispatch),
    })
  )(immutableRenderDecorator(Photos))
);
