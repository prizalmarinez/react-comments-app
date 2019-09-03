import React from 'react';
import { Comment } from 'semantic-ui-react';
import faker from 'faker';

const Comments = props => {
    return (
        <div>
            <Comment>
                <Comment.Avatar src={faker.image.avatar()} />
                <Comment.Content>
                    <Comment.Author as='a' className="text-capitalize">
                        {props.author}
                    </Comment.Author>
                    <Comment.Metadata>
                        <small>Today at 5:42PM</small>
                    </Comment.Metadata>
                    <Comment.Text>
                        {faker.lorem.words()}
                    </Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        </div>
    );
};

export default Comments;