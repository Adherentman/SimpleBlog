import React from "react";
import { withRouter } from "react-router";
import { Col } from 'react-bootstrap';
import { Card, CardTitle, CardHeader, CardText, CardActions, RaisedButton } from 'material-ui';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postsActions from '../../actions/postsActions';
import { Url } from '../../env';


class AllPosts extends React.Component{
componentDidMount(){
	const { actions } = this.props;
	actions.getPosts();
};

	render(){

		const { posts, history } =this.props;
        let PostsJs = posts && posts.toJS();
		console.log(PostsJs,'ddddd');


		return(
			<Col xs={24} md={12}>
			<Card style={{padding:15, marginBottom: 30, marginTop: 20}} >
				<CardHeader 
					title='Xzh'
					subtitle="发表于：2017-09-26"
					avatar="/auth.jpeg"
					style={{width:'50%'}}
				/>
				<CardTitle
				title="React生命周期"
				/>
				<CardText style={{wordWrap: 'break-word', wordBreak: 'normal'}}>
					<h4>React生命周期生命周期可能经历如下三个经历：</h4>
					<ul>
						<li>装载过程(Mount): 把组件第一次在DOM树中渲染的过程；</li>
						<li>更新过程(Update): 组件被重新渲染的过程;</li>
						<li>卸载过程(Unmount): 组件从DOM中删除的过程;</li>
					</ul>
				</CardText>
				<CardText style={{wordWrap: 'break-word', wordBreak: 'normal'}}>
					<p>接下来，一个一个解释：</p>
					<p>装载过程</p>
					<ol>
						<li>constructor</li>
						<li>getInitialState</li>
						<li>getDefaultProps</li>
						<li>componentWillMount</li>
						<li>render</li>
						<li>componentDidMount</li>
					</ol>
				</CardText>
		</Card>
			{
				PostsJs && PostsJs.map(x=>
					<Card style={{padding:15, marginBottom: 30, marginTop: 20}} key={x.id}>
						<CardHeader 
							title='Xzh'
							subtitle={x.time}
							avatar="/auth.jpeg"
							style={{width:'50%'}}
						/>
						<CardTitle
						title={x.title}
					/>
						<CardText style={{wordWrap: 'break-word', wordBreak: 'normal'}}>{x.sentens}</CardText>
						<CardText style={{wordWrap: 'break-word', wordBreak: 'normal'}}>{x.text}</CardText>
					</Card>)
			}
			</Col>
		);
	}
}

export default withRouter(connect(state => {
    return {
        posts: state.posts.get('posts'),
    };
}, dispatch => ({
    actions: bindActionCreators(postsActions, dispatch),
}))(immutableRenderDecorator(AllPosts)));