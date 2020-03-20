import styled from 'styled-components';

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f6f6f6;
  min-height: 40px;
  padding: 10px 20px;
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

export const Description = styled.p`
  line-height: 1.35;
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