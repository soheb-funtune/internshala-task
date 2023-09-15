import React from "react";
import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";
import { useMediaPredicate } from "react-media-hook";

export const StyledButton = ({ text }) => {
  const lessthan640 = useMediaPredicate(`(max-width:640px)`);
  return (
    <StyledBtn lessthan640={lessthan640}>
      {text} <BsArrowRightShort className="right-icon" />
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding: 10px 20px;
  border: 1px solid white;
  color: whitesmoke;
  width: ${({ lessthan640 }) => (lessthan640 ? "100%" : "80%")};
  &:hover {
    background-color: white;
    color: black;
  }
  .right-icon {
    font-size: 25px;
  }
`;
