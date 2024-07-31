import styled from 'styled-components';
import React, { useState } from 'react';

// Styled Components
const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

const SearchBox = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
    width: 100%;
    max-width: 600px;

    &:hover {
        border-color: blue;
    }
`;

const SearchIcon = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '🔍'; /* Unicode character for magnifying glass */
        font-size: 16px;
    }
`;

const SearchInput = styled.input`
    padding: 5px;
    font-size: 16px;
    border: none;
    outline: none;
    flex-grow: 1;
`;

const ResultsContainer = styled.div`
    width: 100%;
    max-width: 600px;
`;

function Search({ children, placeholder = 'Search...' }) {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { query });
        }
        return child;
    });

    return (
        <SearchContainer>
            <SearchBox>
                <SearchIcon />
                <SearchInput
                    type="text"
                    placeholder={placeholder}
                    value={query}
                    onChange={handleInputChange}
                />
            </SearchBox>
            <ResultsContainer>{filteredChildren}</ResultsContainer>
        </SearchContainer>
    );
}

export default Search;
