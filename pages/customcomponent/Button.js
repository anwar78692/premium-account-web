import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  overflow: hidden;
  color: white; /* Text color */
  background-color: #563eec; /* Initial background color */
  height: 44px;
  transition: color 0.3s;

  /* Pseudo-element for animation effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent; /* Initial background of pseudo-element */
    transition: transform 0.4s ease;
    transform: scaleX(0); /* Start with scaleX 0 for animation effect */
    transform-origin: left;
    z-index: 0; /* Behind the button content */
  }

  /* Ensure the text content is above the pseudo-element */
  span {
    position: relative;
    z-index: 1;
  }

  /* Define button variants */
  ${({ variant }) =>
    variant === 'primary' &&
    css`
      &:hover::before {
        background-color: green;
        transform: scaleX(1); /* Animate to full width */
      }

      &:disabled {
        background-color: #0070f380;
        cursor: not-allowed;
      }
    `}
  
  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background-color: #eaeaea;
      color: #000;

      &:hover {
        background-color: #cacaca;
      }

      &:disabled {
        background-color: #eaeaea80;
        cursor: not-allowed;
      }
    `}

  ${({ variant }) =>
    variant === 'danger' &&
    css`
      background-color: #e00;
      color: white;

      &:hover {
        background-color: #c00;
      }

      &:disabled {
        background-color: #e0080c80;
        cursor: not-allowed;
      }
    `}

  /* Define button sizes */
  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      padding: 1rem 2rem;
      font-size: 1.125rem;
    `}
`;

const Button = ({ children, variant = 'primary', size = 'medium', ...props }) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
