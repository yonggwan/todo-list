import styled from 'styled-components';

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f6f6f6;
  min-height: 40px;
  padding: 10px 20px;
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
  margin-right: 10px;
  color: transparent;
`

export const Content = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const RegDate = styled.div`
  font-size: 10px;
  color: #888;
  margin-bottom: 3px;
`;

export const Description = styled.p`
  line-height: 1.35;
`;

export const Relations = styled.div`
  font-size: 10px;
  color: #ffadad;
  margin-top: 3px;
`;

export const Button = styled.button`
  color: #ccc;
  border: none;
  background: none;
  outline: 1;
  &:hover, &:focus {
    color: red;
  }
`;