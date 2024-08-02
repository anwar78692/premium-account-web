import React from 'react';
import styled from 'styled-components';

const RememberMeContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;

  /* Hide the default checkbox */
  input[type="checkbox"] {
    display: none;
  }
`;

const CustomCheckbox = styled.div`
  position: relative;
  width: 18px; /* Size of the checkbox */
  height: 18px; /* Size of the checkbox */
  border: 2px solid #ccc; /* Border color */
  border-radius: 4px; /* Rounded corners */
  cursor: pointer;
  background-color: white; /* Default background color */
  display: flex;
  align-items: center;
  justify-content: center;

  /* When checked, change background color and border color */
  ${({ checked }) => checked && `
    background-color: #563eec; /* Checked background color */
    border-color: #563eec; /* Checked border color */
  `}

  /* Custom checkmark */
  &::after {
    content: '';
    position: absolute;
    width: 4px; /* Width of the checkmark */
    height: 9px; /* Height of the checkmark */
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    transform-origin: center;
    opacity: ${({ checked }) => (checked ? 1 : 0)}; /* Show checkmark if checked */
  }
`;

const Label = styled.label`
  margin-left: 0.5rem;
  font-weight: 500;
  cursor: pointer;
`;

function RememberMe({ label, className,isChecked, onChange }) {

  return (
    <RememberMeContainer className={className}>
       <input type="checkbox" id={label} checked={isChecked} onChange={onChange} />
      <CustomCheckbox checked={isChecked} onClick={onChange} />
      <Label htmlFor={label} onClick={onChange}>{label}</Label>
    </RememberMeContainer>
  );
}

export default RememberMe;
