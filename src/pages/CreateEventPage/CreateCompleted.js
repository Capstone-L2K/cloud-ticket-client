import React from "react";
import { Title, Subtitle } from "../../styles/fonts/Typography";
import FireWorkSrc from "../../assets/images/fireworks.png";
import styled from "styled-components";
import Button from "../../components/Button";
import { useNavigate } from "react-router";
function CreateCompleted() {
  const DefaultBtnStyle = {
    // 외곽선
    border: "0.5px solid var(--dark-mint)",
    color: "var(--dark-mint)",
    bgColor: "var(--white)",
  };
  let naivate = useNavigate();
  return (
    <CreateCompletedPageLayout>
      <Box>
        <Row>
          <CustomTitle>
            축하합니다. <br />
            성공적으로 행사가 <br />
            생성되었습니다.
          </CustomTitle>
          <img src={FireWorkSrc} width={"80px"} />
        </Row>
        <Button
          style={DefaultBtnStyle}
          width="100%"
          onClick={() => naivate("/host")}
        >
          운영중인 행사 목록으로 이동
        </Button>
      </Box>
    </CreateCompletedPageLayout>
  );
}

export default CreateCompleted;

const CustomTitle = styled(Title)`
  white-space: nowrap;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;
const CreateCompletedPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: -30%;
`;
