import React, { useState } from 'react';
import styled from 'styled-components';
import RememberMe from './Checkbox';

const OptionSelectorContainer = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    padding: 10px 16px 7px 0px;
    border-bottom: 2px solid #ccc;
    margin-top: 15px;
    // border-top: 2px solid #ccc;
  }

  .options {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-right: 10px;
  }

  .option {
    flex: 1 1 calc(50% - 10px);
  }
`;

function OptionSelector({ title, icon: Icon, options, selectedOption, setSelectedOption }) {


  const handleOptionChange = (option) => () => {
    setSelectedOption(option);
  };

  return (
    <OptionSelectorContainer>
      <div className="header">
        <h1 className="font-bold text-xl">{title}</h1>
        <Icon />
      </div>
      <div className="options">
        {options.map((option, index) => (
          <div key={index} className="option">
            <RememberMe
              label={option}
              isChecked={selectedOption === option}
              onChange={handleOptionChange(option)}
            />
          </div>
        ))}
      </div>
    </OptionSelectorContainer>
  );
}

export default OptionSelector;
