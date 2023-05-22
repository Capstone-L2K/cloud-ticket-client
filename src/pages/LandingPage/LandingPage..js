import React from "react";
import { Title, BodyLarge, BodyRegular } from "../../styles/fonts/Typography";
import styled from "styled-components";
import SizedBox from "../../components/SizedBox";
import Button from "../../components/Button";
import checkIconSrc from "../../assets/icons/check-mono.svg";
import SvgIcon from "../../components/SvgIcon";
import { useNavigate } from "react-router";

export default function LandingPage() {
  let navigate = useNavigate();
  const sections = [
    {
      title: "01. 다양한 접수 대행",
      contents: `전시, 숙박, 교통, 콘서트, 엑스포/박람회, 
  간담회, 강의, 파티 등 다양한 형태의 접수 특성을 고려한 접수대행이 가능합니다.`,
    },
    {
      title: "02. 카드 / 티켓 커스터마이징",
      contents: ` 행사 특성에 따른 맞춤형 카드 / 티켓 제작이 가능합니다.`,
    },
    {
      title: "03. 모바일 티켓 발권 및 검표",
      contents: `모바일 QR 코드를 통한 자동 티켓 발권, 스캐너를 통한 티켓 검표가
      가능합니다.`,
    },
  ];

  const handleCreateBtnClick = () => {
    navigate("/create");
  };

  const handleBrousingBtnClick = () => {
    navigate("/event");
  };

  const DefaultBtnStyle = {
    // 외곽선
    border: "0.5px solid var(--dark-mint)",
    color: "var(--dark-mint)",
    bgColor: "var(--white)",
  };

  const FilledBtnStyle = {
    // 민트색 버튼
    border: "none",
    color: "var(--white)",
    bgColor: "var(--dark-mint)",
  };
  return (
    <LandingPageLayout>
      <SizedBox height={"5rem"} />
      <Box>
        <Title>
          오프라인 행사 입장 관리는 <br /> 이제 클라우드 티켓에서
        </Title>
        <SizedBox height={"2rem"} />
        <BodyRegular>
          티켓 등록부터 검수까지 <br />
          모두 클라우드 티켓과 함께!
        </BodyRegular>
        <SizedBox height={"5rem"} />
        <Row>
          <Button style={DefaultBtnStyle} onClick={handleCreateBtnClick}>
            행사 생성하기
          </Button>
          <Button style={FilledBtnStyle} onClick={handleBrousingBtnClick}>
            행사 둘러보기
          </Button>
        </Row>
      </Box>
      <SizedBox height={"5rem"} />
      <Box>
        <Title>
          행사, 더이상 복잡하게 <br /> 관리하지 마세요
        </Title>
        <SizedBox height={"2rem"} />
        <BodyRegular>
          행사 시작부터 끝까지 클라우드 티켓이 도와드릴게요. 클라우드 티켓을
          사용하면 참가자 입장 및 관리와 관련된 모든 기능들을 쉽고 빠르게 이용할
          수 있습니다.
        </BodyRegular>
        <SizedBox height={"5rem"} />
        {sections.map(({ title, contents }) => {
          return (
            <Row key={title}>
              <SvgIcon src={checkIconSrc} size={"40px"} />
              <Col>
                <BodyRegular>{title}</BodyRegular>
                <BodyRegular>{contents}</BodyRegular>
              </Col>
            </Row>
          );
        })}
      </Box>
    </LandingPageLayout>
  );
}

const LandingPageLayout = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  height: 100%;

  /* PC (해상도 1024px)*/
  @media all and (min-width: 1024px) {
    justify-content: center;
    width: 50%;
  }

  /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  margin-bottom: 3rem;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  width: 50rem;
`;
