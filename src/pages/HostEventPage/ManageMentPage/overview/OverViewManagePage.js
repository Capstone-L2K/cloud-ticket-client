import React, { useState, useEffect } from "react";
import {
  BodySmall,
  BodyRegular,
  Subtitle,
  Title,
} from "../../../../styles/fonts/Typography";
import SizedBox from "../../../../components/SizedBox";
import styled from "styled-components";
import { useNavigate } from "react-router";
import useInput from "../../../../hooks/useInput";
import SvgIcon from "../../../../components/SvgIcon";
import ImageIconSrc from "../../../../assets/icons/image.svg";
import { SCREEN_PADDING } from "../../../../styles/style";
import { SquareBtn } from "../../../CreateEventPage/form/SquareBtn";
import { useParams } from "react-router";
import BackIconSrc from "../../../../assets/icons/back.svg";
import DateInput from "../../../CreateEventPage/form/DateInput";
import { Input } from "../../../CreateEventPage/form/Input";
import ImagePicker from "../../../CreateEventPage/form/ImagePicker";
import EventService from "../../../../services/EventService";
export default function OverViewManagePage({ setStep, eventInputs }) {
  const [name, handleNameChange, setName] = useInput("");
  const [category, handleCategoryChange, setCategory] = useInput("");
  const [contents, handleEventContentChange, setContents] = useInput("");
  const [images, setImages] = useState();
  const [date, setDate] = useState("");

  const { id } = useParams();
  const handleSubmitEventForm = () => {
    alert("수정사항이 저장되었습니다.");
  };
  useEffect(() => {
    EventService.getEventDetail(id)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          let event = res.data;

          setName(event.event_name);
          setCategory(event.event_category);
          setContents(event.event_content);
          setImages(event.images);
          setDate(new Date(event.event_date));
          setDate(event.loc);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <EventFormLayout>
      <Title>행사 개요</Title>
      <SizedBox height={"50px"} />
      <Form>
        <Box>
          <BodyRegular>행사 이름</BodyRegular>

          <Input value={name} onChange={handleNameChange} />

          <ImagePicker images={images} setImage={setImages} />
        </Box>
        <Box>
          <BodyRegular>카테고리</BodyRegular>

          <Input value={category} onChange={handleCategoryChange} />
        </Box>
        <Box>
          <BodyRegular>행사 설명</BodyRegular>

          <TextArea value={contents} onChange={handleEventContentChange} />
        </Box>

        <Box>
          <BodyRegular>날짜 및 시간</BodyRegular>
          <DateInput date={date} setDate={setDate} />
        </Box>

        <Box>
          <BodyRegular>장소</BodyRegular>
          <Input />
        </Box>
      </Form>
      <SquareBtn onClick={handleSubmitEventForm}>저장</SquareBtn>
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
  padding: 50px 0;
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
