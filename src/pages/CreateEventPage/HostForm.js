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
import { SubmitButton } from "./form/SubmitBtn";
export default function HostForm({ setStep, hostInputs }) {
  let navigate = useNavigate();

  const [email, handleEmailChange] = useInput(hostInputs.current.email);
  const [phoneNumber, handlePhoneNumberChange] = useInput(
    hostInputs.current.phoneNumber
  );

  const handleSubmitHostForm = () => {
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
      <SubmitButton onClick={handleSubmitHostForm}>다음</SubmitButton>
    </HostFormLayout>
  );
}

export const Form = styled.form`
  margin: 0 auto;
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
