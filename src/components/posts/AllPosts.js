import React from "react";
import { withRouter } from "react-router";
import { Col } from 'react-bootstrap';
import { Card, CardTitle, CardHeader, CardText, CardActions, RaisedButton } from 'material-ui';


import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postsActions from '../../actions/postsActions';


class AllPosts extends React.Component{
componentDidMount(){
	const { actions } = this.props;
	actions.getPosts();
};

	render(){
		const { posts, actions } =this.props;
		
		const data = [
			{ auther: "Xzh", title:"第一篇", data:"2017", txt:"dajdpajdpajdojapodapfapoda" },
			{ auther: "Xzh", title:"第二篇", data:"2017", txt:"ehpqhepiqhepqheopqhrfabnf;hf;a" },
			{ auther: "Xzh", title:"第三篇", data:"2017", txt:"lajldhapeouqopeyogoqirqigravlhavhda" },
		];
		const allPosts = data;

		return(
			<Col xs={24} md={12}>
			{
			posts && posts.map(x=>
					<Card style={{padding:15, marginBottom: 30, marginTop: 20}} key={x.get('id')}><CardActions>
					{console.log(x,'hdihahodahpdah')}
						<RaisedButton 
							style={{float:'right', marginRight:20, marginTop:'2%'}}
							label="阅读" 
							secondary={true}
						/>
						</CardActions>
						<CardHeader 
							title='xzh'
							subtitle={x.get('time')}
							avatar="/auth.jpeg"
							style={{width:'50%'}}
						/>
						<CardTitle
						title={x.get('title')}
					/>
						<CardText style={{wordWrap: 'break-word', wordBreak: 'normal'}}>{x.get('sentens')}</CardText>
					</Card>)
			}
			</Col>
		);
	}
}

export default withRouter(connect(state => {
    return {
        posts: state.dashboard.get('posts'),
    };
}, dispatch => ({
    actions: bindActionCreators(postsActions, dispatch),
}))(immutableRenderDecorator(AllPosts)));