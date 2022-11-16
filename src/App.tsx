import React from 'react';
import { database } from './firebase';
import TodoList from './containers/TodoList';
import { GlobalStyle } from './styles/global';
import * as Styled from './styles/app.style';
import * as api from './api';

class App extends React.Component {
  // private app: firebase.app.App;
  private todoRef: firebase.database.Reference;
  constructor (props: any) {
    super(props);
    this.todoRef = database.ref('/todos');
  }
  componentDidMount () {
    const pageview = async () => {
      try {
        const responseBody = await api.logService.pageview();
        // const responseBody = await response.json();
        console.log(responseBody);
      } catch (err) {
        console.log('err', err);
      }
    };
    pageview();
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
