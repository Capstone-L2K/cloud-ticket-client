import React from "react";
import styled from "styled-components";
import LogoSrc from "../assets/images/logo.svg";
import SvgIcon from "./SvgIcon";
import { Subtitle } from "../styles/fonts/Typography";

export default function Logo({ size, color }) {
  const sizes = {
    s: "30px",
  };
  return (
    <LogoLayout>
      <SvgIcon src={LogoSrc} size={sizes[size]} />
      <Subtitle color={color}>Cloud Ticket</Subtitle>
    </LogoLayout>
  );
}

const LogoLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;
