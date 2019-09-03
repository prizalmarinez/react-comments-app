import React from 'react';
import { Button, Card, Grid } from 'semantic-ui-react'

const ApprovalCard = props => {
    return (
        <Grid.Column>
            <Card>
                <Card.Content>
                    {props.children}
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                            Approve
                        </Button>
                        <Button basic color='red'>
                            Decline
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </Grid.Column>
    );
};

export default ApprovalCard;