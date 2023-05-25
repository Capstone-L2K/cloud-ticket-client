import React from "react";
import styled from "styled-components";
import { TextButton, CustomFont } from "../styles/fonts/Typography";

export default function Tag({ state, children, onClick }) {
  return (
    <Box state={state} onClick={onClick}>
      <CustomFont color="white">{children}</CustomFont>
    </Box>
  );
}

const Box = styled.div`
  background-color: ${({ state }) =>
    state === 0 ? `var(--gray200)` : `var(--main)`};
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`;
