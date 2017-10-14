import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Card, FontIcon } from 'material-ui';
import CountUp from 'react-countup'

class NumberCard extends Component{
    render(){

        const numbercard = {
            padding: 32,
            marginBottom: 24,
            marginTop: 10,
        };
        
        const fontIcon = {
            float: 'left',
            fontSize: 50,
        };

        const content = {
            width: '100%',
            paddingLeft: 78,
        };

        const title = {
            fontSize: 16,
            marginBottom: 10,
        };

        const number = {
            fontSize: 24,
            height: 15,
        };

        return(
            <Card style={numbercard}>
                <FontIcon className="material-icons" style={fontIcon}>group</FontIcon>
                <div style={content}>
                    <p style={title}>Online Review</p>
                    <p style={number}> 
                        <CountUp
                            start={0}
                            end={2781}
                            duration={4}
                            useEasing
                            useGrouping
                            separator=","
                        />
                  </p>
                </div>
            </Card>
        );
    }
}

Number.propTypes = {
    number: PropTypes.string,
  }
export default NumberCard;