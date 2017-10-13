import React from 'react';
import Main from '../Main';
import { withRouter } from 'react-router';
import { Paper, Card } from 'material-ui';
import { Row, Col } from 'react-bootstrap';
import NumberCard from './component/NumberCard';

class DashBoard extends React.Component{
    render(){

        const cardstyle = {
            width:200,
        };

        return(
            <Main selectedDrawer="dashboard">
                <Paper className="admin-paper" zDepth={3}>
                    <Row className="show-grid">
                        <Col md={4}>
                            <NumberCard />
                        </Col>
                        <Col md={4}>
                            <NumberCard />
                        </Col>
                        <Col md={4}>
                            <NumberCard />
                        </Col>
                    </Row>
                </Paper>
            </Main>
        );
    }
}

export default withRouter(DashBoard);