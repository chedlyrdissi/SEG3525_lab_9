import React, { Component } from 'react';

import { Accordion, Card } from 'react-bootstrap';

import Comment from '../comment/comment.component';
import CommentForm from '../comment-form/comment-form.component';
import Language from '../language';
import UserProfile from '../user-profile';

import './comments.component.css';

class Comments extends Component {

	render() {
		let body;
		if (UserProfile.isLoggedIn()) {
			body = (<Card.Body>
		      			<Comment article={this.props.article} comments={this.props.comments}/>
		      			<div className="container-fluid">
		      				<div className="row">
		      					<CommentForm label={'COMMENT'} article={this.props.article} comid={this.props.article + '.' + (this.props.comments.length + 1)}/>
		      				</div>
		      			</div>
		      		</Card.Body>);
		} else {
			body = (<h3 className="alert alert-danger">{Language.getTextByCode("PLEASE_LOG_IN_COMMENT")}</h3>);
		}
		return (
			<Accordion defaultActiveKey="0">
			  	<Card>
			    	<Accordion.Toggle as={Card.Header} eventKey="0">
			      		<i className="fa fa-commenting-o mr-3"></i>
			      		{Language.getTextByCode('COMMENTS')}
			    	</Accordion.Toggle>
			    	<Accordion.Collapse eventKey="0">
			      		{body}
			    	</Accordion.Collapse>
			  	</Card>
			</Accordion>
		);
	}
}

export default Comments;