import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
font-weight: 500;
    font-size: 16px;
   
`;

function ListItem() {
  return (
    <>
      <ul className="list-none flex justify-start gap-9">
        <li className="block border-r border-gray-200 pr-5">
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
        </li>
        <li className="block border-r border-gray-200 pr-5">
          <svg
            className="ml-3"
            width={26}
            height={26}
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
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
        </li>
        <li className="block">
          <svg
            className="ml-3"
            width={26}
            height={26}
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
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
        </li>
      </ul>
    </>
  );
}

export default ListItem;
