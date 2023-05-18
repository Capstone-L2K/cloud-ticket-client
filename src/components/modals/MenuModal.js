import { useState } from "react";
import styled from "styled-components";
import CancelIconSrc from "../../assets/icons/cancel.svg";
import SvgIcon from "../SvgIcon";
import Button from "../Button";
import Logo from "../Logo";
import { useNavigate } from "react-router";
export const MenuModal = ({ isOpen, closeModal, setIsOpen }) => {
  let naivate = useNavigate();
  const MintBtnStyle = {
    // 외곽선
    border: "none",
    color: "var(--white)",
    bgColor: "var(--main)",
  };

  const WhiteBtnStyle = {
    // 외곽선
    border: "none",
    color: "var(--black)",
    bgColor: "var(--white)",
  };

  const hanleClickLogo = () => {
    naivate("/");
    closeModal();
  };
  const isLogin = JSON.parse(sessionStorage.getItem("isAuthenticated"));
  return (
    <ModalContainer>
      {isOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <ModalContent>
              <Row>
                <Logo color={`var(--white)`} onClick={hanleClickLogo} />
                <SvgIcon
                  src={CancelIconSrc}
                  onClick={closeModal}
                  size={"30px"}
                />
              </Row>

              <Col>
                <Button
                  style={MintBtnStyle}
                  onClick={() => {
                    naivate("/event");
                    setIsOpen(false);
                  }}
                >
                  공연 둘러보기
                </Button>
                <Button
                  style={MintBtnStyle}
                  onClick={() => {
                    naivate("/event/create");
                    setIsOpen(false);
                  }}
                >
                  행사 주최하기
                </Button>
                {isLogin ? (
                  <Button
                    style={WhiteBtnStyle}
                    onClick={() => {
                      naivate("/mypage");
                      setIsOpen(false);
                    }}
                  >
                    마이페이지
                  </Button>
                ) : (
                  <Button
                    style={WhiteBtnStyle}
                    onClick={() => {
                      naivate("/login");
                      setIsOpen(false);
                    }}
                  >
                    로그인
                  </Button>
                )}
              </Col>
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

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
`;

export const ModalOverlay = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: modal-show 0.3s;
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

export const ExitBtn = styled(ModalBtn)`
  background-color: #4000c7;
  border-radius: 10px;
  text-decoration: none;
  margin: 10px;
  padding: 5px 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: "dialog",
}))`
  // Modal창 CSS를 구현합니다.
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  background-color: var(--main);
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

export default MenuModal;
