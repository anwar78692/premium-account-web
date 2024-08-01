import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: white;
  font-size: 24px;
  text-align: center;
`;

const StyledDivTop = styled.div`
background-color: red;
padding: 6px;
`
function Header() {
    return (
        <StyledDivTop>
            <StyledH1>Welcome to Premium Account Store</StyledH1>
        </StyledDivTop>
    )
}

export default Header
