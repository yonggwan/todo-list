import styled from 'styled-components';

export const TodoItem = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f6f6f6;
  min-height: 40px;
  padding: 10px 20px;
  transition: background-color ease 0.2s;
  background-color: ${({active}) => active ? '#fff4f7' : 'inherit'};
`;

export const Content = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const RegDate = styled.div`
  font-size: 10px;
  color: #888;
  margin-bottom: 3px;
`;

export const Description = styled.p<{ done: boolean }>`
  line-height: 1.35;
  ${({ done }) => done && 'text-decoration: line-through;'}
`;

export const TextInput = styled.input`
  display: block;
  width: 100%;
`;

export const Relations = styled.div`
  font-size: 10px;
  color: #ffadad;
  margin-top: 3px;
`;

export const Button = styled.button`
  font-size: 11px;
  color: #ccc;
  border: none;
  background: none;
  padding: 0 3px;
  &:hover, &:focus {
    color: #666;
  }
`;