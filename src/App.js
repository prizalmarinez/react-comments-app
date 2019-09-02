import React from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
// comonents
import Comments from './components/Comments'

function App() {
  return (
    <div className="App">
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={10}>
            <Comments author="John Wick" />
          </Grid.Column>
          <Grid.Column width={3}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
