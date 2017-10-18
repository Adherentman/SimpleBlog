import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'material-ui';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

class AreaCharts extends Component{
    render(){

        const data = [
            {name: 'Page A', 访问人数: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', 访问人数: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', 访问人数: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', 访问人数: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', 访问人数: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', 访问人数: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', 访问人数: 3490, pv: 4300, amt: 2100},
        ];
        return(
            <Card style={{margin:25, paddingBottom:20}}>
            <CardTitle title="Card title" />
            <ResponsiveContainer minHeight={300}>
                <AreaChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 0 }}>
                <Legend verticalAlign="top" align="right" iconType="circle"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <Tooltip/>
                    <Area type='monotone' dataKey='访问人数' stroke='#c1e0fc' fill='#c1e0fc' />
                </AreaChart>
            </ResponsiveContainer>
            </Card>
        );
    }
}

AreaCharts.propTypes = {
    data: PropTypes.array,
  }

export default AreaCharts;