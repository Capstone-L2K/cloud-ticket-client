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
import { useNavigate } from "react-router";
export default function EventCard({ event }) {
  const { event_loc, banner, event_name, event_date, event_id } = event;

  let navigate = useNavigate();
  const moveToDetailPage = () => {
    navigate(`/event/${event_id}`);
  };
  return (
    <Box onClick={moveToDetailPage}>
      <Img src={banner} width={"100%"} height={"200px"} />

      <BodySmall>{event_name}</BodySmall>
      <BodyXSmall>{event_date}</BodyXSmall>
      <Row>
        <Caption>@ {event_loc}</Caption>
        <Row2>
          <SvgIcon src={PeopleSrc} size="12px" />
          <BodyXSmall>0</BodyXSmall>
        </Row2>
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
  height: 300px;
`;

const Img = styled.img`
  object-fit: cover;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
