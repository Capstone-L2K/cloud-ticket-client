import React, { useState } from "react";
import styled, { css } from "styled-components";

import { TextButton } from "../../../styles/fonts/Typography";
function Toggle() {
  const [mode, setMode] = useState();
  const clickedToggle = () => {
    if (mode == 0) {
      setMode(1);
    } else {
      setMode(0);
    }
  };

  return (
    <Wrapper>
      <ToggleBtn onClick={clickedToggle} mode={mode}>
        <Circle mode={mode} />
      </ToggleBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  align-items: center;
`;

const ToggleBtn = styled.button`
  z-index: 5;
  width: 70px;
  height: 35px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  background-color: var(--main);
`;
const Circle = styled.div`
  background-color: white;
  width: 24px;
  height: 24px;
  border-radius: 50px;
  position: absolute;
  left: 10%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.mode &&
    css`
      transform: translate(50px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;

export default Toggle;
