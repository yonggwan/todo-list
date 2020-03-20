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
      <Styled.Input type='checkbox' id={todo.id} />
      <Styled.Label htmlFor={todo.id}>v</Styled.Label>
      <Styled.Content>
        <Styled.RegDate>{todo.updatedDate}</Styled.RegDate>
        <Styled.Description>{todo.description}</Styled.Description>
        <Styled.Relations>#운동 #뱃살 #다이어트</Styled.Relations>
      </Styled.Content>
      <Styled.Button>x</Styled.Button>
    </Styled.TodoItem>
  )
};

export default TodoItem;
