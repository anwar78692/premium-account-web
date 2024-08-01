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
  width: 20px; /* Size of the checkbox */
  height: 20px; /* Size of the checkbox */
  border: 2px solid #ccc; /* Border color */
  border-radius: 4px; /* Rounded corners */
  cursor: pointer;
  background-color: white; /* Default background color */
  display: flex;
  align-items: center;
  justify-content: center;

  /* When checked, change background color and border color */
  input[type="checkbox"]:checked + & {
    background-color: #563eec; /* Checked background color */
    border-color: #563eec; /* Checked border color */
  }

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
    opacity: 0; /* Hide checkmark by default */
  }

  /* Show checkmark when checked */
  input[type="checkbox"]:checked + &::after {
    opacity: 1;
  }
`;

const Label = styled.label`
  margin-left: 0.5rem;
  font-weight: 500;
  cursor: pointer;
`;

function RememberMe({label}) {
  return (
    <RememberMeContainer>
      <input type="checkbox" id="rememberMe" />
      <CustomCheckbox />
      <Label htmlFor="rememberMe">{label}</Label>
    </RememberMeContainer>
  );
}

export default RememberMe;
