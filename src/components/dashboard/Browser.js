import React, { Component } from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col } from 'react-bootstrap';
import { Card, Chip, Divider, List, ListItem, Subheader} from 'material-ui';
import * as dashboardActions from '../../actions/dashboardActions';

class Browser extends Component{

componentDidMount() {
    const { actions } = this.props;
    actions.getDashboardBrowser();
}

render(){

    const { browserList } = this.props;
    
    let PostsJs = browserList && browserList.toJS();
    console.log(PostsJs,"wo shi BrowserList");
    // let browserListJs = browserList && browserList.toJS();
    // console.log(browserListJs,'toJsya');

return(
    <Col xs={6} md={4}>
    <Card style={{marginTop:16, marginRight:20}} >
    <List>
    <Subheader>访问设备</Subheader>
    {
        PostsJs && PostsJs.map(x =>
            <div key={x.id}>
            <ListItem 
            primaryText={x.name}
            rightAvatar={<Chip backgroundColor={x.color}>{x.percent}%</Chip>}
            />
            <Divider/>
            </div>
        )
    }
    </List>
    </Card>
    </Col>);
    }
}


export default connect(state => {
    return {
        browserList: state.dashboard.get('browserList'),
    };
}, dispatch => ({
    actions: bindActionCreators(dashboardActions, dispatch),
}))(immutableRenderDecorator(Browser));