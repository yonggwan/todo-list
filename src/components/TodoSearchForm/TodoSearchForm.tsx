import React from 'react';
import * as Styled from './style';

type Props = {
  
};

const TodoSearchForm = (props: Props) => {
  const {} = props;
  const [focused, setFocused] = React.useState(false);

  return (
    <Styled.SearchContainer>
      SearchContainer
    </Styled.SearchContainer>
  );
};

export default TodoSearchForm;
