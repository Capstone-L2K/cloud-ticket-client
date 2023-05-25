import DropDown from "./form/DropDown";
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
import SvgIcon from "../../components/SvgIcon";
import BackIconSrc from "../../assets/icons/back.svg";
import TicketIconSrc from "../../assets/icons/ticket.svg";
import Toggle from "./form/Toggle";

import CheckIconSrc from "../../assets/icons/check.svg";
import UnCheckIconSrc from "../../assets/icons/uncheck.svg";
export default function TicketForm({
  setStep,
  handleCreateEvent,
  ticketInputs,
}) {
  const back = () => {
    setStep(1);
  };

  const makeOption = (start, end) => {
    let options = [];
    for (var i = start; i <= end; i++) {
      options.push(i);
    }

    return options;
  };

  const [setting1, setSetting1] = useState(false);
  const [setting2, setSetting2] = useState(false);

  const [ticketName, handleChangeTicketName] = useInput("");
  const [ticketLimitPerPerson, handleChangeTicketLimitPerPerson] = useInput(1);
  const [numOfEntireTickets, handleChangeNumOfEntireTickets] = useInput(10);

  const handleOnClickTicketIcon = () => {
    setStep(3);
  };
  return (
    <TicketFormLayout>
      <SvgIcon src={BackIconSrc} onClick={back} size={"30px"} />
      <SizedBox height={"30px"} />
      <Subtitle> 3 / 3 단계 </Subtitle>
      <Title>티켓 기본 정보</Title>
      <SizedBox height={"50px"} />
      <Form>
        <Box>
          <BodyRegular>티켓이름</BodyRegular>
          <Row>
            <Input onChange={handleChangeTicketName} value={ticketName} />
            <SvgIcon src={TicketIconSrc} onClick={handleOnClickTicketIcon} />
          </Row>
        </Box>

        <Row>
          <BodyRegular>1인당 매 수 제한</BodyRegular>
          <DropDown
            options={makeOption(1, 5)}
            handleSelect={handleChangeTicketLimitPerPerson}
            selected={ticketLimitPerPerson}
          />
        </Row>

        <Row>
          <BodyRegular>전체 티켓 매수</BodyRegular>
          <DropDown
            options={makeOption(1, 30)}
            handleSelect={handleChangeNumOfEntireTickets}
            selected={numOfEntireTickets}
          />
        </Row>

        <Row>
          <CustomBodyRegular>티켓 금액</CustomBodyRegular>
          <Input />
          <BodyRegular>원</BodyRegular>
        </Row>

        <Row>
          <CustomBodyRegular>SMS연동</CustomBodyRegular>

          <Toggle />
        </Row>

        <Row>
          <CustomBodyRegular>SMS 알림설정</CustomBodyRegular>

          <Toggle />
        </Row>

        <Row>
          {setting1 ? (
            <SvgIcon src={CheckIconSrc} onClick={() => setSetting1(false)} />
          ) : (
            <SvgIcon src={UnCheckIconSrc} onClick={() => setSetting1(true)} />
          )}

          <CustomBodyRegular>예매 직후 예매확인메시지 보내기</CustomBodyRegular>
        </Row>

        <Row>
          {setting2 ? (
            <SvgIcon src={CheckIconSrc} onClick={() => setSetting2(false)} />
          ) : (
            <SvgIcon src={UnCheckIconSrc} onClick={() => setSetting2(true)} />
          )}
          <CustomBodyRegular>
            공연 직전에 참가자 분들께 안내메시지 보내기
          </CustomBodyRegular>
        </Row>
      </Form>
      <SquareBtn onClick={handleCreateEvent}>이벤트 생성하기</SquareBtn>
    </TicketFormLayout>
  );
}

const CustomBodyRegular = styled(BodyRegular)`
  white-space: nowrap;
`;
const TicketFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding-bottom: 1rem;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;
export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 5px;
  height: 40px;
  text-align: center;
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
