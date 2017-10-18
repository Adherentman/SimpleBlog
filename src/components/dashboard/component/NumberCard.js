import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Card, FontIcon } from 'material-ui';
import { Col } from 'react-bootstrap';
import CountUp from 'react-countup'
import {red500, blueGrey600, blue500, deepPurpleA200, indigo600 } from 'material-ui/styles/colors';

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
        const data = [
            { icon: "border_color", tit:"Peopel", "num": "2788", color: blueGrey600 },
            { icon: "camera_alt", tit:"All Photos", "num": "3233", color: indigo600 },
            { icon: "whatshot", tit:"Hi", "num": "5558", color: red500 },
        ];

        const allItem = data;

        return(<Col xs={6} md={4} style={{float: "left"}}>
            {
                allItem.map(x=> <Card style={numbercard} key={x.icon}>
                    <FontIcon className="material-icons" style={fontIcon} color={x.color}>{x.icon}</FontIcon>
                    <div style={content}>
                        <p style={title}>{x.tit}</p>
                        <p style={number}>
                            <CountUp
                                start={0}
                                end={x.num}
                                duration={4}
                                useEasing
                                useGrouping
                                separator=","
                            />
                    </p>
                    </div>
                </Card>)
            }
            </Col>
        );
    }
}

Number.propTypes = {
    number: PropTypes.string,
  }
export default NumberCard;