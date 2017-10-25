import React from 'react';
import IconButton from 'material-ui/IconButton';

class AppFooter extends React.Component{
	render() {
		return (
            <div style={{ marginLeft: "10%",
			marginRight: "0%", marginBottom: "3%",
			textAlign: 'center',
			backgroundColor: '#212121',padding:'30px'}}>
			<p style={{
                margin: '0 auto',
                padding: 0,
                color: 'rgba(255, 255, 255, 0.54)',
                maxWidth: 335}}
            >
                Code Crafted With Heart By XU ZI HAO using React.js & Material-UI.&copy; 2017</p>
            <IconButton
                iconStyle={{color: "white"}}
                iconClassName="muidocs-icon-custom-github"
                href="https://github.com/Adherentman"
                linkButton={true}
            />
            </div>);
    }
};

export default AppFooter;
