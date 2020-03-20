import React from 'react';
import Todo from '../../models/Todo';
import TextInput from '../../components/TextInput';
import TodoItem from '../../components/TodoItem/TodoItem';
import TodoSearchForm from '../../components/TodoSearchForm';
import * as Styled from './style';

type Props = {
  todoRef: firebase.database.Reference;
};

type State = {
  todos: Array<Todo> | null;
  isFulfilled: boolean;
};

/**
 * @description json 구조의 data를 배열로 변환
 * @param {json} jsonObject 
 * @return {array}
 */
const mapJsonToArray = <T extends {}>(json: Object): Array<T> => Object.entries(json).map(([k, v]) => ({
  id: k,
  ...v
}));

class TodoList extends React.Component<Props, State> {
  public state: State = {
    todos: null,
    isFulfilled: false
  }
  // ## lifecycle ##
  componentDidMount = () => {
    this.props.todoRef.on('value', (snap) => {
      this.setState({ todos: mapJsonToArray<Todo>(snap.val()) });
    });
  }

  // ## handlers ##
  handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.which === 13) {
      const target = event.target as HTMLInputElement;
      this.addTodo(target.value);
      target.value = '';
    }
  };

  handleTodoSearch = () => {

  };
  
  // ## actions ##
  addTodo = async (description: string, callback?: Function) => {
    const newTodoRef = await this.props.todoRef.push();
    const newTodoItem: Todo = {
      id: newTodoRef.key as string,
      description: description,
      registeredDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
      // relatedTodoId: string
    }
    newTodoRef.set(newTodoItem);
    callback && callback();
  };
  
  // ## etc functions ##
  mapTodoStateToComponent = () => {
    return this.state.todos?.map(todo => <TodoItem key={todo.id} todo={todo} />);
  }

  render () {
    return (
      <div>
        <TextInput
          label='todo...'
          name='newtodo'
          onKeyDown={this.handleInputKeydown}
        />
        <TodoSearchForm />
        {this.state.todos ? (
          <Styled.TodoListContainer>
            {this.mapTodoStateToComponent()}
          </Styled.TodoListContainer>
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
