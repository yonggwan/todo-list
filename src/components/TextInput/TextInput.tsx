import React from 'react';
import * as Styled from './style';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const TextInput = (props: Props) => {
  const { label, name, onFocus, onBlur, ...rest } = props;
  const [focused, setFocused] = React.useState(false);
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus && onFocus.call(event.target, event);
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur && onBlur.call(event.target, event);
  };
  return (
    <>
      <Styled.Input
        type='text'
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required
        {...rest}
      />
      <Styled.Label htmlFor={name} focused={focused}>
        <Styled.LabelText focused={focused}>{label}</Styled.LabelText>
      </Styled.Label>
    </>
  );
};

export default TextInput;
