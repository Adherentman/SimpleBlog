import React, { Component } from "react";
import { withRouter } from "react-router";
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, FontIcon } from 'material-ui';
import { Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import * as dashboardActions from '../../actions/dashboardActions';

class DashBoardCard extends Component{
    
componentDidMount(){
    const { actions } = this.props;
    actions.getDashboardCards();
}

render(){
    const { cards } = this.props;
    console.log(cards,'ggggg');

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