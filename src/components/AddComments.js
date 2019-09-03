import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

class AddComments extends Component {
    state = {
        author: ''
    }

    onChange = (e) => this.setState({ author: e.target.value })

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.author);
        this.props.addComment(this.state.author)
        this.setState({ author: '' })
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Input label='Add Author' placeholder='Author name here...' value={this.state.author} onChange={this.onChange} />
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default AddComments;