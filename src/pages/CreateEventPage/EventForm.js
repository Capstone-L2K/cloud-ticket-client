import React from "react";
import {
  BodySmall,
  BodyRegular,
  Subtitle,
  Title,
} from "../../styles/fonts/Typography";
import SizedBox from "../../components/SizedBox";
import styled from "styled-components";
import { useNavigate } from "react-router";
import useInput from "../../hooks/useInput";
import SvgIcon from "../../components/SvgIcon";
import ImageIconSrc from "../../assets/icons/image.svg";
import { SCREEN_PADDING } from "../../styles/style";
import { SubmitButton } from "./form/SubmitBtn";

export default function EventForm({ setStep, eventInputs }) {
  let navigate = useNavigate();

  const [email, handleEmailChange] = useInput("");
  const [phoneNumber, handlePhoneNumberChange] = useInput("");

  const handleSubmitHostForm = () => {
    eventInputs.current = {
      email: email,
      phoneNumber: phoneNumber,
    };
    setStep(2);
  };

  const back = () => {
    setStep(0);
    alert("Back");
  };

  const handleOpenFile = () => {
    alert("이미지 파일 불러오기");
  };
  return (
    <EventFormLayout>
      <button onClick={back}>뒤로</button>
      <Subtitle> 2/3 단계 </Subtitle>
      <Title>이벤트 기본 정보</Title>
      <SizedBox height={"50px"} />
      <Form>
        <Box>
          <BodyRegular>행사 이름</BodyRegular>
          <Row>
            <Input value={email} onChange={handleEmailChange} />
            <SvgIcon src={ImageIconSrc} onClick={handleOpenFile} size="30px" />
          </Row>
        </Box>
        <Box>
          <BodyRegular>카테고리</BodyRegular>

          <Input value={email} onChange={handleEmailChange} />
        </Box>
        <Box>
          <BodyRegular>행사 설명</BodyRegular>

          <TextArea />
        </Box>
        <SizedBox height="20px" />
        <Box>
          <BodyRegular>장소</BodyRegular>
          <Input value={phoneNumber} onChange={handlePhoneNumberChange} />
        </Box>
      </Form>
      <SubmitButton onClick={handleSubmitHostForm}>다음</SubmitButton>
    </EventFormLayout>
  );
}

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;
const EventFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 44px;
  width: 100%;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: red;
  width: 100%;
  gap: 10px;
`;

export const Input = styled.input`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 44px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const TextArea = styled.textarea`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 100px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;
