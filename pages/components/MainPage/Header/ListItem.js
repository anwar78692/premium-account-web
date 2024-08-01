import Model from "@/pages/customcomponent/Model";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

const StyledP = styled.p`
  font-weight: 500;
  font-size: 16px;
`;
const ListContainer = styled.li`
  display: block;
  cursor: pointer;
  padding-right: 1.5rem;
  border-right: 1px solid lightgray;

  svg {
    margin-left: 0.75rem;
  }
  &:first-child {
    & svg {
      margin-left: 2rem;
    }
  }
  &:last-child {
    border-right: none;
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

      <ul className="list-none flex justify-start gap-9">
        <ListContainer onClick={handleAccountClick}>
          <svg
            width={26}
            height={26}
            className="ml-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <StyledP className="">My account</StyledP>
        </ListContainer>
        <ListContainer>
          <svg
            className="ml-3"
            width={26}
            height={26}
            marginLeft={6}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>{" "}
          </svg>
          <StyledP>Wishlist</StyledP>
        </ListContainer>
        <ListContainer>
          <svg
            className="ml-3"
            width={26}
            height={26}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <StyledP>Checkout</StyledP>
        </ListContainer>
      </ul>
    </>
  );
}

export default ListItem;
