import Model from "@/pages/customcomponent/Model";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

const StyledP = styled.p`
  font-weight: 500;
  font-size: 16px;
`;
const ListContainer = styled.li`
      display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f0f0f0;
    position: relative;
    border: 1px solid lightgray;

  svg {
    width: 24px;
    height: 24px;
  }

  &:first-child {
    margin-left: 2rem; /* Adjust the left margin for the first item */
  }
`;

function ListItem() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
const router = useRouter();
  const handleAccountClick = () => {
    console.log("Account clicked");
router.push("/login")
  };

  const handleClosePopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <>
      {/* {showLoginPopup && (
        <Model width={400} onClose={handleClosePopup}>
          <h1>Login</h1>

        </Model>
      )} */}
  <ul className="list-none flex justify-end gap-4">
    <ListContainer onClick={handleAccountClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </ListContainer>
    <ListContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    </ListContainer>
    <ListContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </ListContainer>
  </ul>
    </>
  );
}

export default ListItem;
