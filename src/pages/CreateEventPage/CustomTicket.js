import React, { useState } from "react";
import styled from "styled-components";
import Canvas from "./Canvas";
import { useRef } from "react";
import {
  Title,
  Subtitle,
  Caption,
  BodySmall,
} from "../../styles/fonts/Typography";
import { SquareBtn } from "./form/SquareBtn";
import SvgIcon from "../../components/SvgIcon";
import ImageIconSrc from "../../assets/icons/image.svg";
import useImage from "use-image";
import SpoidIconSrc from "../../assets/icons/spoid.svg";
import { CirclePicker } from "react-color";
import Polotono from "./form/Polotono";
import BackIconSrc from "../../assets/icons/back.svg";
import { createStore } from "polotno/model/store";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import SizedBox from "../../components/SizedBox";
import { useNavigate } from "react-router";
export default function CustomTicket({ setStep }) {
  const handleSaveTicketDesign = () => {
    alert("티켓 디자인이 저장되었습니다. ");
  };
  const store = createStore({
    key: process.env.REACT_APP_POLOTONO_API_KEY, // you can create it here: https://polotno.com/cabinet/
    // you can hide back-link on a paid license
    // but it will be good if you can keep it for Polotno project support
    showCredit: true,
  });

  const [imgSrc, setImgSrc] = useState();
  const imgInputRef = useRef();

  let naivate = useNavigate();
  const onChangeImg = () => {
    imgInputRef.current.click();
  };
  const back = () => {
    setStep(2);
  };
  return (
    <CustomTicketPageLayout>
      <SvgIcon src={BackIconSrc} onClick={back} size={"30px"} />
      <Subtitle>나만의 티켓 디자인</Subtitle>
      <Title fw={700}>커스터마이징 티켓</Title>

      <Caption>
        한번 생성한 티켓 이미지는 바꿀 수 없으니 신중하게 결정해주세요 :)
      </Caption>
      <Polotono store={store} />
      <SizedBox height="5rem" />
      <SquareBtn onClick={handleSaveTicketDesign}>티켓 디자인 저장</SquareBtn>
    </CustomTicketPageLayout>
  );
}

const CustomTicketPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  gap: 10px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;
const ImgContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;
const Row2 = styled.div`
  display: flex;
  flex-direction: row;

  gap: 10px;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;
