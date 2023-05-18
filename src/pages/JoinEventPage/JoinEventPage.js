import React, { useState } from "react";
import { QRModal } from "../../components/modals/QRModal";
import EventListData from "../../db/EventData.json";
import { Title, BodyRegular } from "../../styles/fonts/Typography";
import EventBox from "./EventBox";
import styled from "styled-components";
import SizedBox from "../../components/SizedBox";
import { id } from "date-fns/locale";
export default function JoinEventPage() {
  const [QRModalVisible, setQRModalVisible] = useState(false);

  const [focusedEventId, setFocusedEventId] = useState(0);
  const handleQRClick = (id) => {
    setQRModalVisible(true);
    setFocusedEventId(id);
  };
  return (
    <JoinEventPageLayout>
      <Row>
        <Title>김서연 </Title>
        <BodyRegular> 님께서 참여하신 행사 목록입니다.</BodyRegular>
      </Row>

      <EventList>
        {EventListData.map((event) => (
          <EventBox
            event={event}
            id={event.id}
            onQRClick={() => handleQRClick(event.id)}
          />
        ))}
      </EventList>
      <QRModal
        id={id}
        title={EventListData[0].name}
        isOpen={QRModalVisible}
        closeModal={() => setQRModalVisible(false)}
      />
    </JoinEventPageLayout>
  );
}
const JoinEventPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  padding: 30px 0px;
`;
const EventList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 0;
  height: 100%;
  width: 100%;
  gap: 3rem;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  gap: 10px;
`;
