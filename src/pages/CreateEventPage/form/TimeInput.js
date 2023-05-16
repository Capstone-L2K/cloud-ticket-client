import React, { useState } from "react";
import { Input } from "./Input";
import DatePicker from "react-datepicker";

export default function TimeInput() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
  };
  return (
    <DatePicker
      selected={date}
      onChange={handleDateChange}
      showTimeSelect
      dateFormat="Pp"
      customInput={
        // 날짜 뜨는 인풋 커스텀

        <Input />
      }
    />
  );
}
