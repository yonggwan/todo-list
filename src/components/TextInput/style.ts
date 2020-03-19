import styled from 'styled-components';

const base = `
  font-family: 'Ubuntu', sans-serif;
  display: block;
  margin: 10px;
  padding: 5px;
  border: none;
  font-size: 22px;
`;

export const Input = styled.input`
  ${base}
  font-size: 48px;
  font-weight: 300;
  border-radius: 2px;
  margin: 0;
  border: none;
  width: 80%;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;
  overflow-x: hidden;

  &:focus, &:valid {
    padding-top: 35px;
  }

  &:focus + label > span,
  &:valid + label > span {
    top: -100px;
    font-size: 22px;
    color: #aaa;
  }

  &:valid + label {
    border-color: green;
  }

  &:invalid {
    box-shadow: none;
  }
`;

export const Label = styled.label<{focused: boolean}>`
  display: block;
  position: relative;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  width: 10%;
  border-top: 1px solid red;
  -webkit-transition: width 0.4s ease;
  transition: width 0.4s ease;
  height: 0px;
  ${({ focused }) => focused && `
    width: 80%;
  `};
`;

export const LabelText = styled.span<{focused: boolean}>`
  ${base}
  font-weight: 300;
  margin: 0;
  position: absolute;
  color: #8F8F8F;
  font-size: 48px;
  top: -66px;
  left: 0px;
  z-index: -1;
  -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
`;
