import React from "react";
import Logo from "../../components/Logo";
import styled from "styled-components";
import SvgIcon from "../../components/SvgIcon";
import MenuSrc from "../../assets/icons/menu.svg";
import { Title, BodyLarge } from "../../styles/fonts/Typography";

//모바일 vs 데스크탑 나눠서
export default function Header() {
  return (
    <HeaderLayout>
      <Logo size={"s"} />
      <SvgIcon src={MenuSrc} size={"30px"} />
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`;
