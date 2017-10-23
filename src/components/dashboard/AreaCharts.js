import React, { Component } from 'react';
import { withRouter } from "react-router";
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardTitle } from 'material-ui';
import { Col } from 'react-bootstrap';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import * as dashboardActions from '../../actions/dashboardActions';

class AreaCharts extends Component{

render(){


const data = [
    {name: '2009 ', 网页端访问人数: 900, 移动端访问人数: 1200 },
    {name: '2010 ', 网页端访问人数: 1020, 移动端访问人数: 998 },
    {name: '2011 ', 网页端访问人数: 1400, 移动端访问人数: 700 },
    {name: '2012 ', 网页端访问人数: 1500, 移动端访问人数: 808 },
    {name: '2013 ', 网页端访问人数: 1100, 移动端访问人数: 600 },
    {name: '2014 ', 网页端访问人数: 870, 移动端访问人数: 800  },
    {name: '2015 ', 网页端访问人数: 600, 移动端访问人数: 300  },
    {name: '2016 ', 网页端访问人数: 820, 移动端访问人数: 450  },
];

return(
    <Col xs={12} md={8}>
    <Card style={{margin:17, paddingBottom:20, paddingLeft: 10}}>
    <CardTitle title="访问波动图" />
    <ResponsiveContainer minHeight={300}>
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 0 }}>
        <Legend verticalAlign="top" align="right" iconType="circle"/>
            <XAxis dataKey='name'/>
            <YAxis/>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Tooltip/>
            <Area type='monotone' dataKey='网页端访问人数' stroke='#c1e0fc' fill='#c1e0fc' />
            <Area type='monotone' dataKey='移动端访问人数'  stroke='#64ea91' fill='#64ea91' />
        </AreaChart>
    </ResponsiveContainer>
    </Card>
    </Col>)
    }
}

export default withRouter(connect(state => {
    return {
        equipment: state.dashboard.get('equipment'),
    };
}, dispatch => ({
    actions: bindActionCreators(dashboardActions, dispatch),
}))(immutableRenderDecorator(AreaCharts)));