import React from 'react';
import { database } from './firebase';
import TodoList from './containers/TodoList';
import { GlobalStyle } from './styles/global';

class App extends React.Component {
  // private app: firebase.app.App;
  private todoRef: firebase.database.Reference;
  constructor (props: any) {
    super(props);
    this.todoRef = database.ref('/todos');
  }
  render () {
    return (
      <React.Fragment>
        <GlobalStyle />
        <div className="app">
          <h1>Todo Project</h1>
          <TodoList todoRef={this.todoRef} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
