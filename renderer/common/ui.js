import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { normalBox, bigBox } from './styles/uilts';
import { css } from '@emotion/react';

export const Input = options => {
  return <StyledInput {...options} />;
};

const StyledInput = styled.input`
  ${({ option }) => {
    switch (option) {
      case 'big':
        return css`
          ${bigBox}
        `;
      default:
        return css`
          ${normalBox}
        `;
    }
  }}
`;

export const Button = ({ text, ...options }) => {
  return <StyledButton {...options}>{text}</StyledButton>;
};

export const LinkButton = ({ text, href, ...options }) => {
  return (
    <Link href={href}>
      <StyledButton {...options}>
        <a>{text}</a>
      </StyledButton>
    </Link>
  );
};

const StyledButton = styled.button`
  ${({ option }) => {
    switch (option) {
      case 'big':
        return css`
          ${bigBox}
        `;
      default:
        return css`
          ${normalBox}
        `;
    }
  }}
`;

export const ErrorMsg = ({ text }) => {
  return <StyledErrorMsg>{text}</StyledErrorMsg>;
};

const StyledErrorMsg = styled.p`
  color: red;
  font-size: 10px;
`;
