import React from 'react';
import { Comment, Icon, Header } from 'semantic-ui-react';
import faker from 'faker';

const Comments = () => {
    return (
        <div>
            <Comment.Group>
                <Header as='h3' dividing>
                    Comments
                </Header>
                <Comment>
                    <Comment.Avatar src={faker.image.avatar()} />
                    <Comment.Content>
                        <Comment.Author as='a'>
                            {faker.name.firstName()} {faker.name.lastName()}
                        </Comment.Author>
                        <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                        <Comment.Text>
                            {faker.lorem.sentences()}
                        </Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
        </div>
    );
};

export default Comments;