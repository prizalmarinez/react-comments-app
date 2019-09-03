import React, { Component } from 'react';
import './App.css';
import { Grid, Container } from 'semantic-ui-react';

// components
import CommentsList from './components/CommentsList'
import AddComments from './components/AddComments'
class App extends Component {
  state = {
    comments: [
      {
        author: 'john wick',
        id: 1
      },
      {
        author: 'superman',
        id: 2
      }
    ]
  }

  addComment = (author) => {
    const newComment = {
      id: Math.floor(Date.now() / 1000),
      author: author
    }
    this.setState({ comments: [...this.state.comments, newComment] })
  }

  render() {
    return (
      <div className="App">
        <Container>
          <AddComments addComment={this.addComment} />
          <div className="mt-20">
            <Grid columns={4}>
              <Grid.Row>
                <CommentsList comments={this.state.comments} />
              </Grid.Row>
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;