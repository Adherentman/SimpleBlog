import React from 'react';
import Main from '../Main';
import { withRouter } from 'react-router';
import { Paper, Card } from 'material-ui';
import { Row, Col } from 'react-bootstrap';
import Lin from "./Line";

class DashBoard extends React.Component{
    render(){
        return(
            <Main selectedDrawer="dashboard">
                <Paper className="admin-paper" zDepth={3}>
                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                            <Card style="width:200px;">
                                <Lin />
                            </Card>
                        </Col>
                        <Col xs={12} md={8}>
                            <Card style="width:200px;">
                                <Lin />
                            </Card>
                        </Col>
                    </Row>
                </Paper>
            </Main>
        );
    }
}

export default withRouter(DashBoard);