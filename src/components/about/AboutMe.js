import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Paper } from 'material-ui';
import Main from '../Main';
import { Row } from 'react-bootstrap';
import About from './About';
class AboutMe extends Component {
    render(){
        return(
            <Main selectedDrawer="me">
                <Paper className="admin-paper" zDepth={3}>
                    <Row className="show-grid">
                    <About/>
                    </Row>
                </Paper>
            </Main>
        );
    }
}

export default withRouter(AboutMe);