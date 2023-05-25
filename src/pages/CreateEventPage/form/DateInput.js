import React, { useState } from "react";
import DatePicker from "react-datepicker";
import SvgIcon from "../../../components/SvgIcon";
import CalendarIconSrc from "../../../assets/icons/calendar.svg";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "./Input";
import { ko } from "date-fns/esm/locale";

export default function DateInput({ date, setDate }) {
  const [open, setOpen] = useState(false);

  const handleDateChange = (date) => {
    setDate(date);
    console.log(date);
  };

  return (
    <Row>
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        locale={ko} // 한글로 변경
        dateFormat="yyyy.MM.dd (eee), hh:mm" // 시간 포맷 변경
        showPopperArrow={false} // 화살표 변경
        showTimeSelect
        customInput={
          // 날짜 뜨는 인풋 커스텀

          <Input />
        }
      />

      <SvgIcon src={CalendarIconSrc} onClick={() => setOpen((prev) => !prev)} />
    </Row>
  );
}
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 10px;
  height: 40px;
  text-align: center;
`;
