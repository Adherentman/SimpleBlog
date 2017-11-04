import React, { Component } from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router";
import { Col } from 'react-bootstrap';
import {GridList, GridTile} from 'material-ui/GridList';
import * as lifetripActions from '../../actions/lifetripActions';

class OneLinePhotos extends Component{
componentDidMount() {
    const { actions } = this.props;
    actions.getPhotos();
}
render(){
    const { photos } =this.props;
    const styles = {
        root: {
          margin: '30px',
          width:600,
        },
        gridList: {
          display: 'flex',
          flexWrap: 'nowrap',
          overflowX: 'auto',
        },
      };

return ( 
    <Col xs={12} md={8}>
        <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
            {
                photos && photos.map(x => (
                    <GridTile
                    key={x.get('id')}
                    title={x.get('title')}
                    titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                  >
                    <img src={x.get('image')} alt="#"/>
                  </GridTile>
            ))}
            </GridList>
    </div>
    </Col>);
    }
}

export default withRouter(connect(state => {
    return {
        photos: state.lifetrip.get('photos'),
    };
}, dispatch => ({
    actions: bindActionCreators(lifetripActions, dispatch),
}))(immutableRenderDecorator(OneLinePhotos)));
