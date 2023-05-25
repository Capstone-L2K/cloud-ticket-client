import React, { useState } from "react";
import {
  Title,
  BodyXSmall,
  Caption,
  Subtitle,
  BodySmall,
} from "../../../../styles/fonts/Typography";

import SvgIcon from "../../../../components/SvgIcon";
import styled from "styled-components";

import { useNavigate } from "react-router";
import RightIconSrc from "../../../../assets/icons/right-arrow.svg";

function PaymentLog({ date, name, price, num_of_ticket }) {
  let naivate = useNavigate();

  const handleOnClickRightIcon = () => {};
  return (
    <Box>
      <BodySmall fw={500}>{date}</BodySmall>
      <BodySmall fw={500}>{name}</BodySmall>
      <BodySmall fw={500}>{price}</BodySmall>
      <BodySmall fw={500}>{num_of_ticket} 매</BodySmall>
      <SvgIcon
        src={RightIconSrc}
        size={"20px"}
        onClick={handleOnClickRightIcon}
      />
    </Box>
  );
}

export default PaymentLog;
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
