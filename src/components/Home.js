import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AppBar, IconButton, RaisedButton } from 'material-ui';
import { Url } from '../env';

class Home extends Component {
    render() {
        const { history } = this.props;
        const title = 'blog';

        return (
            <div style={{backgroundColor:'#fff'}}>
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
                    <img src='http://ozar6ogjb.bkt.clouddn.com/xzhlogo.png' style={{width:'100%', margin:'20px 0', height:'40vw', maxHeight:'230px'}}/>
                    <h2 style={{textAlign:'center'}}>Code Crafted With Heart By Xzh,</h2>
                    <h3 style={{textAlign:'center'}}>Using React、Material-UI</h3>
                    <RaisedButton label="Let's Go"
                    style={{alignItems:'center',marginLeft:165,marginTop:25}}
                    onClick={() => {history.push(Url('_dashboard'))}}
                    />
                </div>
            </div>
        </div>
        <div style={{overflow:'auto'}}>
            <div style={{padding:'48px'}}>
                <h2 style={{marginBottom:'0.35em', fontSize:'25px', fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif', lineHeight:'25px'}}>Quick Links</h2>
                <div style={{lineHeight:'1.5em', fontSize:'1.3em', fontWeight:'300'}}>
                    <div style={{width:'100%', display:'flex', flexWrap:'wrap'}}>
                        <div style={{maxWidth:'50%', flexBasis:'50%'}}>
                        <ui style={{listStyle:'none'}}>
                        <li style={{paddingTop:'4px', paddingBottom:'4px', display:'list-item'}}><a style={{color:'inherit', textDecoration:'none'}} href="https://github.com/Adherentman">GitHub</a></li>
                        <li style={{paddingTop:'4px', paddingBottom:'4px', display:'list-item'}}><a style={{color:'inherit', textDecoration:'none'}} href="http://www.adherentman.cn/">Old Blog</a></li>
                        <li style={{paddingTop:'4px', paddingBottom:'4px', display:'list-item'}}><a style={{color:'inherit', textDecoration:'none'}} href="https://www.zhihu.com/people/xu-zi-hao-60/activities">Zhi Hu</a></li>
                        </ui>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>);
    }
}

export default withRouter(Home);