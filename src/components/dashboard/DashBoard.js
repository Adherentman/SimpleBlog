import React from 'react';
import Main from '../Main';
import { withRouter } from 'react-router';
import { Paper } from 'material-ui';
import { Row, Col } from 'react-bootstrap';
import NumberCard from './component/NumberCard';
import AreaCharts from "./component/AreaCharts";

class DashBoard extends React.Component{
    render(){
        return(
            <Main selectedDrawer="dashboard">
                <Paper className="admin-paper" zDepth={3}>
                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                            <NumberCard />
                        </Col>
                        <Col xs={6} md={4}>
                            <NumberCard />
                        </Col>
                        <Col xs={6} md={4}>
                            <NumberCard />
                        </Col>
                        <Col xs={12} md={8}>
                        <AreaCharts />
                    </Col>
                    <Col xs={6} md={4}>
                        <Row className="show-grid">
                            <Col xs={18} md={12}>
                            </Col>
                            <Col xs={18} md={12}>
                            </Col>
                        </Row>
                    </Col>
                    </Row>
                </Paper>
            </Main>
        );
    }
}

export default withRouter(DashBoard);