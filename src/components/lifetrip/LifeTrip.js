import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Row } from 'react-bootstrap';
import { Paper } from 'material-ui';
import Main from '../Main';
import Photos from './Photos';


class LifeTrip extends Component {
    render() {
        return (
            <Main selectedDrawer="flight">
                <Paper className="admin-paper" zDepth={3}>
                    <Row className="show-grid">
                    <Photos />
                    </Row>
                </Paper>
            </Main>
        );
    }
}
export default withRouter(LifeTrip);