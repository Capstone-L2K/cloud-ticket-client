import React from "react";
import styled from "styled-components";
import RightIconSrc from "../../assets/icons/right-arrow.svg";
import { Title, Subtitle } from "../../styles/fonts/Typography";
import SvgIcon from "../../components/SvgIcon";
import { useNavigate } from "react-router";
export default function SettingMenu() {
  const menus = [
    { name: "결제내역", path: "/payment" },
    { name: "환경설정", path: "/setting" },
    { name: "약관 및 정책", path: "/policies" },
  ];
  return (
    <MenuList>
      {menus.map(({ name, path }) => {
        <MenuItem name={name} path={path} />;
      })}
    </MenuList>
  );
}
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 300px;
`;

function MenuItem({ name, path }) {
  let navigate = useNavigate();

  return (
    <Menu>
      <Title>{name}</Title>

      <SvgIcon
        src={RightIconSrc}
        size={"40px"}
        onClick={() => navigate(path)}
      />
    </Menu>
  );
}

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  height: 70px;
  border-radius: var(--border-radius);
  cursor: pointer;
  border: 0.5px solid var(--gray300);
`;
