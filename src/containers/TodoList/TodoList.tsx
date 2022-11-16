import React from 'react';
import Todo from '../../models/Todo';
import TextInput from '../../components/TextInput';
import TodoItem from '../../components/TodoItem/TodoItem';
import TodoSearchForm from '../../components/TodoSearchForm';
import * as Styled from './style';
import * as api from '../../api';

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
const mapJsonToArray = <T extends {}>(json: Object, mapper?: (value: T) => any): Array<T> => Object.entries(json).map(([k, v]) => mapper ? mapper(v) : ({
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
      const todos = snap.val();
      const nextState: State = {
        todos: null,
        isFulfilled: true
      };
      if (todos) {
        nextState.todos = mapJsonToArray<Todo>(todos, value => new Todo(value));
      }
      this.setState(nextState);
    });
  }

  // ## handlers ##
  handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.which === 13) {
      const target = event.target as HTMLInputElement;
      if (target.value.trim()) {
        this.addTodo(target.value);
        target.value = '';
      }
    }
  };

  handleTodoUpdate = (id: string, param: Partial<Todo>) => {
    this.updateTodo(id, param);
  };

  handleTodoRemove = (id: string) => {
    this.removeTodo(id);
  };
  
  // ## actions ##
  addTodo = async (description: string, callback?: Function) => {
    const newTodoRef = await this.props.todoRef.push();
    const createdAt = new Date().toISOString();
    const newTodoItem = {
      id: newTodoRef.key as string,
      description: description,
      createdAt,
      updatedAt: '',
      // relatedTodoId: string
    };
    newTodoRef.set(newTodoItem);
    api.logService.newTodo(description, createdAt);
    callback && callback();
  };

  updateTodo = async (id: string, param: Partial<Todo>) => {
    const nextTodo: Partial<Todo> = {
      ...param,
      updatedAt: new Date().toISOString()
    }
    await this.props.todoRef.child(id).update(nextTodo);
    // this.props.todoRef;
  };

  removeTodo = async (id: string) => {
    await this.props.todoRef.child(id).remove();
  };
  
  // ## etc functions ##
  mapTodoStateToComponent = () => {
    return this.state.todos?.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        update={(param) => this.handleTodoUpdate(todo.id, param)}
        remove={() => this.handleTodoRemove(todo.id)} />
      ));
  };

  render () {
    return (
      <div>
        <TextInput
          maxLength={250}
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
