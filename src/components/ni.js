import React from 'react';
import Main from './Main';
import { withRouter } from 'react-router';

class hi extends React.Component{
    render(){
        return(
            <Main selectedDrawer="hhh">
            <p>hhhhhhhhhhhhhhhhhhhhhhhhdfahdahpdahopdhpoahdpoahpodahh</p>
            </Main>
        );
    }
}

export default withRouter(hi);