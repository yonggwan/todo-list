import React from 'react';
import ToggleBox from '../../components/ToggleBox';
import * as Styled from './style';

type Props = {
  
};

const TodoSearchForm = (props: Props) => {
  const {} = props;
  const [focused, setFocused] = React.useState(false);

  return (
    <Styled.SearchContainer>
      <ToggleBox checked disabled type='checkbox' name='isDone' label='완료' />
      <ToggleBox checked disabled type='checkbox' name='isNotDone' label='미완료' />
    </Styled.SearchContainer>
  );
};

export default TodoSearchForm;
