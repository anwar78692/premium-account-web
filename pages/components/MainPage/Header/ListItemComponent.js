import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left:24px;
`;

const ListItem = styled.div`
  position: relative;
  padding: 10px 15px;
  cursor: pointer;
  &:hover > div {
    display: block;
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid lightgray;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 160px;
`;

const DropdownItem = styled.div`
  padding: 10px;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const categories = ['Category 1', 'Category 2', 'Category 3'];

const ListItemComponent = () => {
  const router = useRouter();

  const isHomePage = router.pathname === '/';

  return (
    <ListContainer>
      <div style={{ fontWeight: isHomePage ? 'bold' : 'normal' }}>Home</div>
      <div>Promotion</div>
      <ListItem>
        Categories
        <Dropdown>
          {categories.map((category, index) => (
            <DropdownItem key={index}>{category}</DropdownItem>
          ))}
        </Dropdown>
      </ListItem>
      <div>Other Stuffs</div>
      <div>Settings</div>
    </ListContainer>
  );
};

export default ListItemComponent;
