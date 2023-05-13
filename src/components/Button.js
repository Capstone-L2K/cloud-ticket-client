import React from "react";
import styled from "styled-components";
import { Title, TextButton } from "../styles/fonts/Typography";
export default function Button({
  onClick,
  children,
  style,
  width = "15rem",
  height = "5rem",
}) {
  return (
    <Btn onClick={onClick} width={width} height={height} style={style}>
      <TextButton>{children} </TextButton>
    </Btn>
  );
}

const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: var(--border-radius);

  border: ${({ style }) => style.border};

  background-color: ${({ style }) => style.bgColor};

  color: ${({ style }) => style.color};
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  cursor: pointer;
`;
