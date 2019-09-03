import React, { Component } from 'react';
import Comments from './Comments';
import ApprovalCard from './ApprovalCard'

class CommentsList extends Component {
    render() {
        return this.props.comments.map((comment) => (
            <ApprovalCard key={comment.id}>
                <Comments author={comment.author} />
            </ApprovalCard>
        ));
    }
}

export default CommentsList;