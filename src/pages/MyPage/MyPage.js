import React from "react";
import { Title, BodyRegular, BodySmall } from "../../styles/fonts/Typography";
import Button from "../../components/Button";
import SettingMenu from "./SettingMenu";
import ProfileIconSrc from "../../assets/icons/profile.svg";
import SvgIcon from "../../components/SvgIcon";
import SizedBox from "../../components/SizedBox";
import TicketIconSrc from "../../assets/icons/ticket.svg";
import RightIconSrc from "../../assets/icons/right-arrow.svg";
import styled from "styled-components";
import { getUser } from "../../utils/User";

import { DefaultBtnStyle, FilledBtnStyle } from "../../styles/style";
import { useNavigate } from "react-router";
function MyPage() {
  let naivate = useNavigate();

  const userInfo = getUser();

  const handleClickLogout = () => {
    let result = window.confirm("로그아웃 하시겠습니까?");

    if (result) {
      sessionStorage.removeItem("userInfo");
      sessionStorage.removeItem("isAuthenticated");
      naivate("/");
    }
  };

  return (
    <MyPageLayout>
      <Col>
        <BodyRegular>환영합니다!</BodyRegular>
        <Row>
          <Title>{userInfo?.name}</Title>
          <BodyRegular>님의 마이페이지입니다.</BodyRegular>
        </Row>
      </Col>

      <SvgIcon src={ProfileIconSrc} size={"100px"} />
      <SizedBox height="30px" />
      <Button
        style={FilledBtnStyle}
        width="100%"
        onClick={() => naivate("/host")}
      >
        운영중인 행사 관리
      </Button>
      <Button
        style={DefaultBtnStyle}
        width="100%"
        onClick={() => naivate("/join")}
      >
        참여중인 행사 목록
      </Button>

      <SettingMenu />
      <RowBtn>
        <Row>
          <SvgIcon src={TicketIconSrc} />

          <BodySmall>티켓 보관함</BodySmall>
        </Row>

        <Row>
          <BodySmall onClick={handleClickLogout}>로그아웃 </BodySmall>
          <BodySmall>|</BodySmall>
          <BodySmall>회원탈퇴 </BodySmall>
        </Row>
      </RowBtn>
    </MyPageLayout>
  );
}

export default MyPage;
const MyPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 30px 0px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: 5px;
`;

const RowBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5px;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
`;
