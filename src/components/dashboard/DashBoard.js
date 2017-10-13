import React from 'react';
import Main from '../Main';
import { withRouter } from 'react-router';
import { Paper } from 'material-ui';

class DashBoard extends React.Component{
    render(){
        return(
            <Main selectedDrawer="dashboard">
                <Paper className="admin-paper">
                    lalallal
                </Paper>
            </Main>
        );
    }
}

export default withRouter(DashBoard);