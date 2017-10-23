import React from 'react';
import Main from '../Main';
import { withRouter } from 'react-router';
import { Paper } from 'material-ui';
import { Row } from 'react-bootstrap';
import DashBoardCard from './DashBoardCard';
import AreaCharts from "./AreaCharts";
import Browser from "./Browser";

class DashBoard extends React.Component{
    render(){
        return(
            <Main selectedDrawer="dashboard">
                <Paper className="admin-paper" zDepth={3}>
                    <Row className="show-grid">
                            <DashBoardCard />
                            <AreaCharts />
                            <Browser />
                    </Row>
                </Paper>
            </Main>
        );
    }
}

export default withRouter(DashBoard);