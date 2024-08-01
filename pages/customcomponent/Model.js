import React from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  width: ${props => props.width}px;
`;

function Model({onClose, children, width}) {
  if (typeof document !== 'undefined') {
    return ReactDOM.createPortal(
        <>
          <Overlay onClick={onClose} />
          <PopupContainer width={width}>
            {children}
          </PopupContainer>
        </>,
        document.body
      );
}
    
}

export default Model
