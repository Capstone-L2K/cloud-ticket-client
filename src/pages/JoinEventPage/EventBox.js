import React, { useState } from "react";
import {
  Title,
  BodyXSmall,
  Caption,
  Subtitle,
} from "../../styles/fonts/Typography";
import QRSrc from "../../assets/icons/qr.svg";
import SvgIcon from "../../components/SvgIcon";
import styled from "styled-components";
import SizedBox from "../../components/SizedBox";
import { QRModal } from "../../components/modals/QRModal";
import EventListData from "../../db/EventData.json";
import { useNavigate } from "react-router";
function EventBox({ event, onQRClick }) {
  const { name, id, datetime_string, place, src } = event;

  const [QRModalVisible, setQRModalVisible] = useState(false);

  let naivate = useNavigate();

  return (
    <Box onClick={() => naivate(`/event/${id}`)}>
      <Subtitle>{name}</Subtitle>

      <Row onClick={(e) => e.stopPropagation()}>
        <Col>
          <BodyXSmall>{datetime_string}</BodyXSmall>{" "}
          <Caption>@ {place}</Caption>
        </Col>

        <SvgIcon src={QRSrc} size={"40px"} onClick={onQRClick} />
      </Row>
    </Box>
  );
}

export default EventBox;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 1rem;
  height: 200px;
  cursor: pointer;

  &:hover {
    border-radius: 1px solid black;
  }
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
