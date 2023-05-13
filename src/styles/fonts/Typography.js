import styled from "styled-components";
// 100;300;400;500;700;900
const Title = styled.h1`
  font-family: "Noto Sans KR";
  font-weight: 900;
  font-size: var(--font-size-xl);
  color: var(--gray600);
  line-height: 120%;
  letter-spacing: -0.022em;
  line-height: 150%;
  /* or 120px */
  margin: 0;
  letter-spacing: -0.022em;
`;

const Subtitle = styled.h2`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: var(--font-size-ml);
  color: var(--gray500);
  line-height: 140%;
  /* or 54px */
  margin: 0;
  letter-spacing: -0.403754px;
`;

const BodyLarge = styled.h3`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;

  font-size: var(--font-size-md);

  color: var(--gray500);
  line-height: 150%;
  /* or 60px */
  margin: 0;
  letter-spacing: -0.022em;
`;

const BodyRegular = styled.h4`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: var(--font-size-ms);
  margin: 0;
  color: var(--gray550);
  line-height: 150%;
  /* or 48px */

  letter-spacing: -0.022em;
`;

const BodySmall = styled.h5`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: var(--font-size-sm);
  margin: 0;
  color: var(--gray400);
  line-height: 150%;
  /* or 38px */

  letter-spacing: -0.022em;
`;

const TextButton = styled.h6`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: var(--font-size-ms);
  margin: 0;
`;

export { Title, Subtitle, BodyLarge, BodyRegular, BodySmall, TextButton };