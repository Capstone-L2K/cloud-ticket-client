import React, { useState } from "react";
import styled from "styled-components";

export default function DropDown({ options }) {
  const [selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  return (
    <Select onChange={handleSelect} value={selected}>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </Select>
  );
}

const Select = styled.select`
  width: 60px;
  border-radius: 4px;
  text-align: center;
  height: 35px;
  font-size: 15px;
`;
