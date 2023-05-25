import React, { useState } from "react";
import styled from "styled-components";

import SvgIcon from "../../../components/SvgIcon";

import { BodyRegular, BodyLarge } from "../../../styles/fonts/Typography";
export default function InfoBox({ title, content, onClick, iconSrc }) {
  return (
    <Box onClick={(e) => e.stopPropagation()}>
      <Col>
        <BodyRegular>{title}</BodyRegular>
        <BodyLarge>{content}</BodyLarge>
      </Col>
      <SvgIcon src={iconSrc} size={"80px"} onClick={onClick} />{" "}
    </Box>
  );
}
const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  background-color: var(--main);
  color: white;
  padding: 1rem;
  height: 15vh;
  max-height: 200px;
  cursor: pointer;
  border-radius: var(--border-radius);
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
