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
  const [isEditing, setIsEditing] = React.useState(false);
  // ## handlers ##
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => props.update({ done: event.target.checked });
  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.which === 13) {
      const target = event.target as HTMLInputElement;
      if (target.value.trim()) {
        props.update({ description: target.value });
        target.value = '';
        setIsEditing(false);
      }
    }
  };

  const { todo } = props;
  return (
    <Styled.TodoItem active={isEditing}>
      <ToggleBox
        type='checkbox'
        name='done'
        id={todo.id}
        checked={todo.done}
        onChange={handleChange} />
      <Styled.Content>
        <Styled.RegDate>
          작성일: {todo.getFormattedDate(todo.createdAt)}
          {todo.updatedAt && ` | 마지막수정일: ${todo.getFormattedDate(todo.updatedAt)}`}
        </Styled.RegDate>
        {isEditing ? (
          <Styled.TextInput
            type='text'
            name='description'
            defaultValue={todo.description}
            autoFocus={true}
            maxLength={250}
            onKeyDown={handleInputKeydown} />
        ) : (
          <Styled.Description done={todo.done}>{todo.description}</Styled.Description>)
        }
        <Styled.Relations>#</Styled.Relations>
      </Styled.Content>
      {!todo.done && <Styled.Button onClick={() => setIsEditing(!isEditing)}>{isEditing ? '취소' : '수정'}</Styled.Button>}
      <Styled.Button onClick={props.remove}>삭제</Styled.Button>
    </Styled.TodoItem>
  )
};

export default TodoItem;
