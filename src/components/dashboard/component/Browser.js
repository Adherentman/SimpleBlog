import React, { Component } from 'react';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col } from 'react-bootstrap';
import { Card, Chip, Divider, List, ListItem, Subheader} from 'material-ui';
import * as dashboardActions from '../../../actions/dashboardActions';

class Browser extends Component{

componentDidMount() {
    const { actions } = this.props;
    actions.getDashboardBrowser();
}

render(){

    const { browserList, actions } = this.props;
    console.log(browserList,"wo shi BrowserList");
    // let browserListJs = browserList && browserList.toJS();
    // console.log(browserListJs,'toJsya');

return(
    <Col xs={6} md={4}>
    <Card style={{marginTop:16, marginRight:20}} >
    <List>
    {
        browserList && browserList.map(x =>
            <div key={x.get('id')}>
            {console.log(x,'sss222')}
            <Subheader>访问设备</Subheader>
            <ListItem 
            primaryText={x.get('name')}
            rightAvatar={<Chip backgroundColor={'#c1e0fc'}>{x.get('percent')}</Chip>}
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