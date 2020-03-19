import React from 'react';
import Todo from '../../models/Todo';
import TextInput from '../../components/TextInput';
import TodoItem from '../../components/todo/TodoItem';
import * as Styled from './style';

type Props = {
  todoRef: firebase.database.Reference;
};

type State = {
  todos: Array<Todo> | null;
  isFulfilled: boolean;
};

class TodoList extends React.Component<Props, State> {
  public state: State = {
    todos: null,
    isFulfilled: false
  }
  // ## lifecycle ##
  componentDidMount = () => {
    this.props.todoRef.on('value', (snap) => {
      this.setState({ todos: snap.val() });
    });
  }

  // ## handlers ##

  // ## actions ##
  addTodo = async (description: string) => {
    alert(description);
    const newTodoRef = await this.props.todoRef.push();
    const newTodoItem: Todo = {
      id: newTodoRef.key as string,
      description: description,
      registeredDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
      // relatedTodoId: string
    }
    newTodoRef.set(newTodoItem);
  };
  
  // ## etc functions ##
  mapTodoStateToComponent = () => {
    console.log(this.state.todos);
    return '';
    return this.state.todos?.map(todo => <TodoItem key={todo.id} todo={todo} />);
  }

  render () {
    return (
      <div>
        <TextInput
          label='todo...'
          name='newtodo'
          onKeyDown={(event) => event.which === 13 && this.addTodo(event.currentTarget.value)}
        />
        {this.state.todos ? (
          <ul>
            {this.mapTodoStateToComponent()}
          </ul>
        ) : this.state.isFulfilled ? (
          <Styled.EmptyBlock>
            할일이 없네요 새로운 할일을 등록해보세요.
          </Styled.EmptyBlock>
        ) : (
          <Styled.EmptyBlock>
            할일을 찾아보고 있습니다...
          </Styled.EmptyBlock>
        )}
      </div>
    )
  }
}

export default TodoList;
