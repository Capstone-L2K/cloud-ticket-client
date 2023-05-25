import React, { useState } from "react";
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
  const [error, setError] = useState("");
  const [email, handleEmailChange] = useInput(hostInputs.current.email);
  const [phoneNumber, handlePhoneNumberChange] = useInput(
    hostInputs.current.phoneNumber
  );

  const handleSubmitHostForm = () => {
    if (email.trim() === "" || phoneNumber.trim() === "") {
      setError("이메일 혹은 전화번호란이 비어있습니다.");
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
      <Form onSubmit={handleSubmitHostForm}>
        <Box>
          <BodyRegular>주최자 이메일</BodyRegular>
          <Input
            value={email}
            onChange={handleEmailChange}
            type="email"
            id="email"
            name="email"
          />
        </Box>
        <SizedBox height="20px" />
        <Box>
          <BodyRegular>주최자 전화번호</BodyRegular>
          <Input
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            type="tel"
            id="tel"
            name="tel"
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            placeholder="010-XXXX-XXXX"
          />
        </Box>
        {error && <Error>{error}</Error>}
        <SizedBox height={"60%"} />
        <SquareBtn type="submit">다음</SquareBtn>
      </Form>
    </HostFormLayout>
  );
}

export const Form = styled.form`
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
export const Error = styled.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;
