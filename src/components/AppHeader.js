import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

class AppHeader extends React.Component{
render(){
    
    const title = 'Blog';

    return(
            <AppBar 
                showMenuIconButton={false}
                title={title}
                style={{zIndex:"1400",position: "fixed", top: "0"}}
                />
    );
    }
}

export default withRouter(AppHeader);
