import React from 'react';
import { withRouter } from 'react-router-dom';
import { Url } from '../env';
import { Drawer, Subheader, FontIcon, List, ListItem, makeSelectable, Divider } from 'material-ui';
import ActionLabel from 'material-ui/svg-icons/hardware/toys';

const SelectableList = makeSelectable(List);

class AppDrawer extends React.Component{
    render(){

        const { value, history } = this.props;

        const iconStyle = {
            marginRight: "24"
        };

        const allListItem = [
            { key: "dashboard", label: "DashBoard", icon: "dashboard" },
            { key: "posts", label: "All Posts", icon: "chrome_reader_mode" },
            // { key: "fe", label: "Font-end Dev", icon: "keyboard" },
            // { key: "os", label: "Operating System", icon: "important_devices" },
            { key: "flight", label: "Life Trip", icon: "flight_takeoff" },
            { key: "me", label: "About Me", icon: "face"},
        ];

        let Item = allListItem;
        console.log(value,"sss");
        
        return(
            <Drawer docked={true} containerStyle={{paddingTop:"4%"}}>
                <SelectableList value={value} onChange={(evt,value) => {
                    history.push(Url('_' + value));
                    console.log(value,"ffffff");
                }}>
				<Subheader>Categories</Subheader>
                {
                    Item.map(it => { return (<ListItem
                        key={it.key}
                        value={it.key}
                        primaryText={it.label}
                        leftIcon={
                        <FontIcon className="material-icons md-48"
                        style={iconStyle}>{it.icon}</FontIcon>}
                        /> );    
                    })
                }

                <Divider /> <br />

                    <SelectableList onChange={(evt, value) => {
                        window.open(value);
                    }}>
                        <Subheader>Links</Subheader>
                        <ListItem primaryText="My GitHub" value="https://github.com/Adherentman" leftIcon={<ActionLabel/>} />
                        <ListItem primaryText="My ZhiHu" value="https://www.zhihu.com/people/xu-zi-hao-60" leftIcon={<ActionLabel/>} />
                    </SelectableList>
                </SelectableList>
            </Drawer>
        );
    }
}

export default withRouter(AppDrawer);