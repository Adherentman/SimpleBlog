import React from 'react';
import Main from '../Main';
import { withRouter } from 'react-router';
import { Paper } from 'material-ui';
import { Row, Col } from 'react-bootstrap';
import DashBoardCard from './component/DashBoardCard';
import AreaCharts from "./component/AreaCharts";

class DashBoard extends React.Component{
    render(){
        return(
            <Main selectedDrawer="dashboard">
                <Paper className="admin-paper" zDepth={3}>
                    <Row className="show-grid">
                            <DashBoardCard />
                        <Col xs={12} md={8}>
                            <AreaCharts />
                        </Col>
                    </Row>
                </Paper>
            </Main>
        );
    }
}

export default withRouter(DashBoard);