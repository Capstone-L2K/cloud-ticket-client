import React from "react";
import styled from "styled-components";
import { Title, TextButton } from "../styles/fonts/Typography";
export default function Button({
  onClick,
  children,
  filled = false,
  width = "15rem",
  height = "5rem",
}) {
  return (
    <Btn onClick={onClick} filled={filled} width={width} height={height}>
      <TextButton>{children} </TextButton>
    </Btn>
  );
}

const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-width: 5px;
  border-radius: var(--border-radius);
  border-color: red;
  border: ${({ filled }) => (filled ? `none` : `0.5px solid var(--dark-mint)`)};

  background-color: ${({ filled }) =>
    filled ? `var(--dark-mint)` : `var(--white)`};

  color: ${({ filled }) => (filled ? `var(--white)` : `var(--dark-mint)`)};

  width: ${({ width }) => (width ? width : "6rem")};
  height: ${({ height }) => (height ? height : "2rem")};

  cursor: pointer;
`;
