import React from "react";
import { withRouter } from "react-router";
import { Col } from 'react-bootstrap';
import { Card, CardTitle, CardHeader, CardText, CardActions, RaisedButton } from 'material-ui';


class AllPosts extends React.Component{
	render(){
		const numbercard = {
            padding: 15,
            marginBottom: 30,
            marginTop: 20,
        };
		
		const data = [
			{ auther: "Xzh", title:"第一篇", data:"2017", txt:"dajdpajdpajdojapodapfapoda" },
			{ auther: "Xzh", title:"第二篇", data:"2017", txt:"ehpqhepiqhepqheopqhrfabnf;hf;a" },
			{ auther: "Xzh", title:"第三篇", data:"2017", txt:"lajldhapeouqopeyogoqirqigravlhavhda" },
		];
		const allPosts = data;

		return(
			<Col xs={24} md={12}>
			{
				allPosts.map(x=>
					<Card style={numbercard} key={x.title}><CardActions>
						<RaisedButton 
							style={{float:'right', marginRight:20, marginTop:'2%'}}
							label="阅读" 
							secondary={true}
						/>
						</CardActions>
						<CardHeader 
							title={x.auther}
							subtitle={x.data}
							avatar="/auth.jpeg"
							style={{width:'50%'}}
						/>
						<CardTitle
						title={x.title}
					/>
						<CardText style={{wordWrap: 'break-word', wordBreak: 'normal'}}>{x.txt}</CardText>
					</Card>)
			}
			</Col>
		);
	}
}

export default withRouter(AllPosts);