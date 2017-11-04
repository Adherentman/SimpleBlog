import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AppBar, IconButton, RaisedButton } from 'material-ui';


class Home extends Component {
    render() {
        const title = 'blog';
        return (
            <div>
            <AppBar
            showMenuIconButton={false}
            title={title}
            style={{zIndex:"1400",position: "fixed", top: "0"}}
            iconElementRight={
            <IconButton 
                iconClassName="muidocs-icon-custom-github" 
                tooltip="Project in github"
                tooltipPosition="bottom-left"
                href='https://github.com/Adherentman/projectblog'
            />          
            }
        />
        <div style={{flex:'1 0 100%'}}>
            <div style={{flex:'0 0 auto', color:'#fff', display:'flex', minHeight:'100vh', alignItems:'center', justifyContent:'center', backgroundColor:'#2196f3'}}>
                <div style={{paddingTop:128, paddingBottom:128}}>
                    <img src="/xzhlogo.png" style={{width:'100%', margin:'20px 0', height:'40vw', maxHeight:'230px'}}/>
                    <h2 style={{textAlign:'center'}}>Code Crafted With Heart By Xzh,</h2>
                    <h3 style={{textAlign:'center'}}>Using React、Material-UI</h3>
                    <RaisedButton label="Let's Go"
                    style={{alignItems:'center',marginLeft:165,marginTop:25}}
                    />
                </div>
            </div>
        </div>
        </div>);
    }
}

export default withRouter(Home);