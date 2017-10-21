import React, { Component } from "react";
import PropTypes from 'prop-types'
import { withRouter } from "react-router";
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, FontIcon } from 'material-ui';
import { Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import * as dashboardActions from '../../../actions/dashboardActions';
import { dashboard } from '../../../api/demo/index';
import { Url, ts } from '../../../env';

class DashBoardCard extends Component{
    
componentDidMount(){
    const { actions } = this.props;
    actions.getDashboardCards();
}

render(){

    const {cards, actions } = this.props;
// const numbercard = {
//     padding: 32,
//     marginBottom: 24,
//     marginTop: 20,
// };

// const fontIcon = {
//     float: 'left',
//     fontSize: 50,
// };

// const content = {
//     width: '100%',
//     paddingLeft: 78,
// };

// const title = {
//     fontSize: 16,
//     marginBottom: 10,
// };

// const number = {
//     fontSize: 24,
//     height: 15,
// };

return(
    <Col xs={18} md={12}>
    {
        cards && cards.map(x=> <Col xs={6} md={4} key={x.get('id')}>
            <Card style={{padding:32, marginBottom: 24, marginTop: 20}}>
            <FontIcon className="material-icons" style={{float:'left', fontSize: 50}} color={x.get('color')}>{x.get('icon')}</FontIcon>
            <div style={{width: '100%', paddingLeft: 78}}>
                <p style={{fontSize: 16, marginBottom: 10}}>{x.get('tit')}</p>
                <p style={{fontSize: 24, height: 15}}>
                    <CountUp
                        start={0}
                        end={x.get('num')}
                        duration={4}
                        useEasing
                        useGrouping
                        separator=","
                    />
            </p>
            </div>
        </Card>
        </Col>)
    }
    </Col>);
    }
}
export default withRouter(connect(state => {
    return {
        cards: state.dashboard.get('cards'),
    };
}, dispatch => ({
    actions: bindActionCreators(dashboardActions, dispatch),
}))(immutableRenderDecorator(DashBoardCard)));