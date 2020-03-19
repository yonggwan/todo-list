import React from 'react';
import Todo from '../models/Todo';
import TextInput from '../components/TextInput';
import TodoItem from '../components/todo/TodoItem';

type Props = {
  todoRef: firebase.database.Reference;
};

type State = {
  todos: Todo[];
};

class TodoList extends React.Component<Props, State> {
  public state: State = {
    todos: []
  }
  componentDidMount = () => {
    this.props.todoRef.on('value', (snap) => {
      const todos: Array<Todo> = snap.val();
      this.setState({ todos });
    });
  }
  mapTodoStateToComponent = () => {
    return this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
  }
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  render () {
    return (
      <div>
        <TextInput
          label='todo...'
          name='newtodo'
          onChange={this.handleChange}
        />
        <ul>
          {this.mapTodoStateToComponent()}
        </ul>
      </div>
    )
  }
}

export default TodoList;
