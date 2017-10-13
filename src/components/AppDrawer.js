import React from 'react';
import { withRouter } from 'react-router-dom';
import { Url } from '../env';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import {List, ListItem, makeSelectable} from 'material-ui/List';

const SelectableList = makeSelectable(List);

class AppDrawer extends React.Component{
    render(){

        const { value, history } = this.props;

        const allListItem = [
            { key: "hhh", label: "所有的文章" },
            { key: "xixi", label: "你好" }
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
                        /> );
                    
                    }
                )
                }
                </SelectableList>
            </Drawer>
        );
    }
}

export default withRouter(AppDrawer);