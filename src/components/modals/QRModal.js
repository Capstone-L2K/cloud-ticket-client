import { useState } from "react";
import styled from "styled-components";
import CancelIconSrc from "../../assets/icons/cancel.svg";
import SvgIcon from "../SvgIcon";
import Button from "../Button";
import Logo from "../Logo";
import { useNavigate } from "react-router";
import QRCode from "react-qr-code";
import { Title, Subtitle } from "../../styles/fonts/Typography";

export const QRModal = ({ id, isOpen, closeModal, title }) => {
  let naivate = useNavigate();

  const fetchQRValue = () => {
    // QR 코드 value 받아오기
  };

  return (
    <ModalContainer>
      {isOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <ModalContent>
              <Row>
                <Title onClick={closeModal}>X</Title>
              </Row>
              <Title>{title} </Title>
              <QRCode
                value="$2b$12$alhHadg3432%FDADF/SFDRcNNRMP6UHjMQSFPppcE.4DMqREk6"
                size="70vw"
              />
            </ModalContent>
          </ModalView>
        </ModalOverlay>
      )}
    </ModalContainer>
  );
};

export const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  gap: 2rem;
  width: 100%;
  height: 100%;
`;

export const ModalOverlay = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: modal-bg-show 0.3s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalBtn = styled.button`
  background-color: var(--coz-purple-600);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;
export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: "dialog",
}))`
  // Modal창 CSS를 구현합니다.
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 90%;
  height: 80%;

  background-color: var(--white);
  > div.desc {
    margin: 50px;
    font-size: 20px;
    color: var(--coz-purple-600);
  }
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: modal-show 0.3s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
