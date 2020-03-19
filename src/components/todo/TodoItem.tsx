import React from 'react';
import Todo from '../../models/Todo';
import * as Styled from './style';

type Props = {
  todo: Todo
};

const TodoItem = (props: Props) => {
  const { todo } = props;
  return (
    <Styled.TodoItem>
      <div>{todo.description}</div>
      <br/>
      <pre>{JSON.stringify(todo)}</pre>
    </Styled.TodoItem>
  )
};

export default TodoItem;