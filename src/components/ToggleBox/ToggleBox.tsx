import React from 'react';
import * as Styled from './style';

type Props = {
  id?: string;
  name: string;
  type: 'checkbox' | 'radio';
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleBox = (props: Props) => {
  const inputId = props.id || props.name;
  return (
    <Styled.ToggleBox className='toggle-box'>
      <Styled.Input
        id={inputId}
        name={props.name}
        type={props.type}
        onChange={props.onChange} 
        disabled={props.disabled}
        defaultChecked={props.checked} />
      <Styled.Label htmlFor={inputId}>v</Styled.Label>      
      <span>{props.label}</span>
    </Styled.ToggleBox>
  );
};

export default ToggleBox;
