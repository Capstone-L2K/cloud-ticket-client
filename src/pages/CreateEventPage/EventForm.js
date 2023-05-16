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
import SvgIcon from "../../components/SvgIcon";
import ImageIconSrc from "../../assets/icons/image.svg";
import { SCREEN_PADDING } from "../../styles/style";
import { SquareBtn } from "./form/SquareBtn";
import ImagePicker from "./form/ImagePicker";
import BackIconSrc from "../../assets/icons/back.svg";
import DateInput from "./form/DateInput";
import { Input } from "./form/Input";
import TimePicker from "./form/TimeInput";

export default function EventForm({ setStep, eventInputs }) {
  let navigate = useNavigate();

  const [name, handleNameChange] = useInput("");
  const [category, handleCategoryChange] = useInput("");
  const [detail, handleEventDetailChange] = useInput("");
  const [image, setImage] = useState("");

  const handleSubmitEventForm = () => {
    eventInputs.current = {
      name: name,
      category: category,
      detail: detail,
    };
    setStep(2);
  };

  const back = () => {
    setStep(0);
  };

  const handleOpenFile = () => {
    alert("이미지 파일 불러오기");
  };
  return (
    <EventFormLayout>
      <SvgIcon src={BackIconSrc} onClick={back} size={"30px"} />
      <SizedBox height={"30px"} />
      <Subtitle> 2 / 3 단계 </Subtitle>
      <Title>이벤트 기본 정보</Title>
      <SizedBox height={"50px"} />
      <Form>
        <Box>
          <BodyRegular>행사 이름</BodyRegular>

          <Input value={name} onChange={handleNameChange} />

          <ImagePicker />
        </Box>
        <Box>
          <BodyRegular>카테고리</BodyRegular>

          <Input />
        </Box>
        <Box>
          <BodyRegular>행사 설명</BodyRegular>

          <TextArea value={detail} onChange={handleEventDetailChange} />
        </Box>

        <Box>
          <BodyRegular>날짜 및 시간</BodyRegular>
          <DateInput />
        </Box>

        <Box>
          <BodyRegular>장소</BodyRegular>
          <Input />
        </Box>
      </Form>
      <SquareBtn onClick={handleSubmitEventForm}>다음</SquareBtn>
    </EventFormLayout>
  );
}

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
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

export const TextArea = styled.textarea`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
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
