import styled from 'styled-components';

export const ToggleBox = styled.div`
  display: inline-block;
  & + & {
    margin-left: 20px;
  }
`;

export const Input = styled.input`
  width: 0;
  & + label {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #fba1bd;
    cursor: pointer;
  }
  &:checked + label {
    color: #fff;
    font-size: 18px;
    background-color: #ffc2d5;
    line-height: 10px;
  }
`;

export const Label = styled.label`
  text-align: center;
  margin-right: 8px;
  color: transparent;
`;
