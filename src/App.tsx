import React from 'react';
import { database } from './firebase';
import TodoList from './containers/TodoList';
import { GlobalStyle } from './styles/global';
import * as Styled from './styles/app.style';
import * as SlackMessaging from './utils/slackMessaging';

class App extends React.Component {
  // private app: firebase.app.App;
  private todoRef: firebase.database.Reference;
  constructor (props: any) {
    super(props);
    this.todoRef = database.ref('/todos');
  }
  componentDidMount () {
    SlackMessaging.send(SlackMessaging.getUserLogMessagingBody());
  }
  render () {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Styled.AppContainer>
          <Styled.AppTitle>Todo List</Styled.AppTitle>
          <TodoList todoRef={this.todoRef} />
        </Styled.AppContainer>
      </React.Fragment>
    );
  }
}

export default App;
