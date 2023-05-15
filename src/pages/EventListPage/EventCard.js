import React from "react";
import {
  BodyRegular,
  BodySmall,
  Caption,
  BodyXSmall,
} from "../../styles/fonts/Typography";
import PeopleSrc from "../../assets/icons/people.svg";
import SvgIcon from "../../components/SvgIcon";
import styled from "styled-components";
import Poster1Src from "../../assets/demo/poster1.png";
import Poster2Src from "../../assets/demo/poster2.png";
import Poster3Src from "../../assets/demo/poster3.png";
import Poster4Src from "../../assets/demo/poster4.png";
export default function EventCard({ event }) {
  const { img_src, name, datetime_string, place, num_of_persons } = event;

  const posters = [Poster1Src, Poster2Src, Poster3Src, Poster4Src];
  return (
    <Box>
      <img src={posters[img_src]} width={"100%"} height={"auto"} />
      <BodySmall>{name}</BodySmall>
      <BodyXSmall>{datetime_string}</BodyXSmall>
      <Row>
        <Caption>@ {place}</Caption>
        <SvgIcon src={PeopleSrc} size="12px" />
        <BodyXSmall>{num_of_persons}</BodyXSmall>
      </Row>
    </Box>
  );
}
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 2px;
  width: 45%;
  height: 120px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
