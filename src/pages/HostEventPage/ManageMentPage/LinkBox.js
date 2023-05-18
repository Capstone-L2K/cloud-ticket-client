import React, { useState } from "react";
import {
  Title,
  BodyXSmall,
  Caption,
  Subtitle,
} from "../../../styles/fonts/Typography";

import SvgIcon from "../../../components/SvgIcon";
import styled from "styled-components";

import { useNavigate } from "react-router";
import RightIconSrc from "../../../assets/icons/right-arrow.svg";

function LinkBox({ title, detail, description, onClick }) {
  let naivate = useNavigate();

  return (
    <Box>
      <Col>
        <Subtitle>{title}</Subtitle>

        <Col>
          <BodyXSmall>{detail}</BodyXSmall>
          <Caption>@ {description}</Caption>
        </Col>
      </Col>
      <SvgIcon src={RightIconSrc} size={"40px"} onClick={onClick} />
    </Box>
  );
}

export default LinkBox;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 1rem;
  height: 20vh;
  max-height: 200px;
  cursor: pointer;
  border-radius: var(--border-radius);
  &:hover {
    background-color: rgba(0, 0, 0, 0.01);
  }
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
`;
