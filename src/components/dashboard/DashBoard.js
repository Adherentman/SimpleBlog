import React from 'react';
import Main from '../Main';
import { withRouter } from 'react-router';
import { Paper } from 'material-ui';
import Lin from "./Line";

class DashBoard extends React.Component{
    render(){
        return(
            <Main selectedDrawer="dashboard">
                <Paper className="admin-paper" zDepth={3}>
                    <div className="row">
                        <Lin />
                    </div>
                </Paper>
            </Main>
        );
    }
}

export default withRouter(DashBoard);