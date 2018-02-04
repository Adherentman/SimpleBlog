import React, { Component } from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

class SkillChart extends Component {
  render() {
    const data = [
      { name: 'Html', uv: 25.47, fill: '#8884d8' },
      { name: 'Css', uv: 20.69, fill: '#83a6ed' },
      { name: 'JavaScript', uv: 30.69, fill: '#8dd1e1' },
      { name: 'Node.js', uv: 15.22, fill: '#82ca9d' },
      { name: 'Mongodb', uv: 15.63, fill: '#a4de6c' },
      { name: 'Webpack', uv: 35.63, fill: '#d0ed57' },
      { name: 'Mac OS/Linux', uv: 45, fill: '#ffc658' },
    ];

    const style = {
      top: 0,
      left: 350,
      lineHeight: '24px',
    };
    return (
      <div style={{ float: 'left' }}>
        <RadialBarChart
          width={500}
          height={300}
          cx={150}
          cy={150}
          innerRadius={20}
          outerRadius={140}
          barSize={10}
          data={data}
        >
          <RadialBar minAngle={15} label background clockWise={true} dataKey="uv" />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </div>
    );
  }
}

export default SkillChart;
