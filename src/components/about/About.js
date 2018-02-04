import React, { Component } from 'react';
import {
  Divider,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui';
import SkillChart from './SkillChart';

class About extends Component {
  render() {
    return (
      <div>
        <h1>关于我:</h1>
        <Divider />
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>昵称-Nickname</TableHeaderColumn>
              <TableHeaderColumn>属性-Attribute</TableHeaderColumn>
              <TableHeaderColumn>坐标-Coordinate</TableHeaderColumn>
              <TableHeaderColumn>语言-Language</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>XuZiHao/徐梓昊</TableRowColumn>
              <TableRowColumn>汉子 摩羯</TableRowColumn>
              <TableRowColumn>北京/浙江</TableRowColumn>
              <TableRowColumn>普通话/温州话/English</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <Divider />
        <span
          style={{
            fontSize: 14,
            textIndent: '1.5em',
          }}
        >
          <p>我这人优点少缺点多，爱捣鼓。</p>
          <p>
            小时候家里用着256M内存的电脑，为了玩游戏（当时游戏配置基本要512M）我可自行就对电脑硬件、软件查询。
          </p>
          <p>在网上寻找可以让游戏流畅的方法。百度了半天，按方法做了半天（删除一些垃圾文件）。</p>
          <p>游戏还是不流畅，电脑开机倒是速度提高了。</p>
          <p>从此走上了对电脑一发不可收拾的热情。</p>
          <p>到了大学毅然的选择了计算机专业。才发现了一个全新的计算机世界。</p>
        </span>
        <Divider />
        <h1>技术栈:</h1>
        <SkillChart />
        <span
          style={{
            fontSize: 17,
            textIndent: '1.5em',
            float: 'right',
          }}
        >
          <h4>该网页技术栈</h4>
          <ol>
            <li>
              React官方脚手架create-react-app<span role="img" aria-label="chuizi">
                🔧
              </span>
            </li>
            <li>
              React、Redux、React-Router<span role="img" aria-label="chuizi">
                ⚙
              </span>
            </li>
            <li>
              Babel, React-Bootstrap, Material UI<span role="img" aria-label="chuizi">
                🚗
              </span>
            </li>
            <li>
              ES6, Express, Mongodb<span role="img" aria-label="chuizi">
                🌿
              </span>
            </li>
            <li>
              Mock.js, Easy Mock<span role="img" aria-label="chuizi">
                🐣
              </span>
            </li>
          </ol>
        </span>
      </div>
    );
  }
}

export default About;
