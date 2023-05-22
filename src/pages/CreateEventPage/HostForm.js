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
import { SCREEN_PADDING } from "../../styles/style";
import { SquareBtn } from "./form/SquareBtn";
import { Input } from "./form/Input";
export default function HostForm({ setStep, hostInputs }) {
  let navigate = useNavigate();

  const [email, handleEmailChange] = useInput(hostInputs.current.email);
  const [phoneNumber, handlePhoneNumberChange] = useInput(
    hostInputs.current.phoneNumber
  );

  const handleSubmitHostForm = () => {
    if (email.trim() === "" || phoneNumber.trim() === "") {
      alert("이메일 혹은 전화번호란이 비어있습니다.");
      return;
    }
    hostInputs.current = {
      email: email,
      phoneNumber: phoneNumber,
    };
    setStep(1);
  };

  return (
    <HostFormLayout>
      <Subtitle> 1/3 단계 </Subtitle>
      <Title>주최자 기본 정보</Title>
      <SizedBox height={"50px"} />
      <Form>
        <Box>
          <BodyRegular>주최자 이메일</BodyRegular>
          <Input value={email} onChange={handleEmailChange} />
        </Box>
        <SizedBox height="20px" />
        <Box>
          <BodyRegular>주최자 전화번호</BodyRegular>
          <Input value={phoneNumber} onChange={handlePhoneNumberChange} />
        </Box>
      </Form>
      <SquareBtn onClick={handleSubmitHostForm}>다음</SquareBtn>
    </HostFormLayout>
  );
}

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
`;
const HostFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: 100%;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;
