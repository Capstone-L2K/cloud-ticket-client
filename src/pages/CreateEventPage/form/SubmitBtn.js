import styled from "styled-components";

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  color: var(--white);
  background-color: var(--main);
  border: none;
  font-size: 18px;

  position: sticky;
  bottom: 30px;
  height: 44px;

  padding: 0 16px 3px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:focus {
    --saf-0: rgba(var(--dark-mint, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;
