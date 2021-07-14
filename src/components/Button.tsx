import React from 'react';
import styled from '@emotion/styled';

const ButtonWrapper = styled.button`
  padding: 10px 20px;
  border: none;
  background: royalblue;
  color: white;
  font-size: 20px;
`;

// props天生有children属性，但不是天生有handleClick属性（由Counter传过来的），所以得定义这个函数——这个函数是event事件引起的回调
interface Props {
  handleClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = props => {
  return (
    <ButtonWrapper onClick={props.handleClick}>{props.children}</ButtonWrapper>
  );
};

export default Button;
