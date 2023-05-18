import React from "react";
import Logo from "../../components/Logo";
import styled from "styled-components";
import SvgIcon from "../../components/SvgIcon";
import MenuSrc from "../../assets/icons/menu.svg";
import { Title, BodyLarge } from "../../styles/fonts/Typography";
import { useState } from "react";
import MenuModal from "../../components/modals/MenuModal";
//모바일 vs 데스크탑 나눠서
export default function Header() {
  const [menuModalVisible, setMenuModalVisible] = useState(false);

  const closeMenuModal = () => {
    setMenuModalVisible(false);
  };

  const openMenuModal = () => {
    setMenuModalVisible(true);
  };
  return (
    <HeaderLayout>
      <Logo size={"s"} />
      {menuModalVisible && (
        <MenuModal
          isOpen={menuModalVisible}
          closeModal={closeMenuModal}
          setIsOpen={setMenuModalVisible}
        >
          <div>안녕하세요!</div>
        </MenuModal>
      )}
      <SvgIcon src={MenuSrc} size={"30px"} onClick={openMenuModal} />
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
