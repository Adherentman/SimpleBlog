import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Paper } from 'material-ui';
import Main from '../Main';
import { Row } from 'react-bootstrap';
import AllPosts from './AllPosts';

class Posts extends Component {
  render() {
    return (
      <Main selectedDrawer="posts">
        <Paper className="admin-paper" zDepth={3}>
          <Row className="show-grid">
            <AllPosts />
          </Row>
        </Paper>
      </Main>
    );
  }
}

export default withRouter(Posts);
