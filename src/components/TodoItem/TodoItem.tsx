import React from 'react';
import Todo from '../../models/Todo';
import ToggleBox from '../../components/ToggleBox';
import * as Styled from './style';

type Props = {
  todo: Todo,
  update: (param: Partial<Todo>) => void;
  remove: () => void;
};

const TodoItem = (props: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => props.update({ done: event.target.checked });

  const { todo } = props;
  return (
    <Styled.TodoItem>
      <ToggleBox
        type='checkbox'
        name='done'
        id={todo.id}
        checked={todo.done}
        onChange={handleChange} />
      <Styled.Content>
        <Styled.RegDate>
          작성일: {todo.getFormattedDate(todo.registeredDate)}
          {todo.updatedDate && ` | 마지막수정일: ${todo.getFormattedDate(todo.updatedDate)}`}
        </Styled.RegDate>
        <Styled.Description>{todo.description}</Styled.Description>
        <Styled.Relations>#운동 #뱃살 #다이어트</Styled.Relations>
      </Styled.Content>
      <Styled.Button>수정</Styled.Button>
      <Styled.Button onClick={props.remove}>삭제</Styled.Button>
    </Styled.TodoItem>
  )
};

export default TodoItem;
