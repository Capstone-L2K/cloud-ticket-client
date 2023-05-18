import React, { useState } from "react";
import {
  Title,
  BodyXSmall,
  Caption,
  Subtitle,
  BodySmall,
} from "../../../styles/fonts/Typography";

import SvgIcon from "../../../components/SvgIcon";
import styled from "styled-components";

import { useNavigate } from "react-router";
import RightIconSrc from "../../../assets/icons/right-arrow.svg";

function FlatLinkBox({ title, description, iconSrc, onClick }) {
  let naivate = useNavigate();

  return (
    <Box>
      <Subtitle>{title}</Subtitle>
      <>
        <SvgIcon src={iconSrc} />
        <BodyXSmall color="black">{description}</BodyXSmall>
      </>
      <SvgIcon src={RightIconSrc} size={"40px"} onClick={onClick} />
    </Box>
  );
}

export default FlatLinkBox;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 1rem;
  height: 70px;
  border-radius: var(--border-radius);
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.01);
  }
`;
