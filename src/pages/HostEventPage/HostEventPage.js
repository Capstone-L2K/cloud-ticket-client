import React, { useState } from "react";
import { QRModal } from "../../components/modals/QRModal";
import EventListData from "../../db/EventData.json";
import { Title, BodyRegular } from "../../styles/fonts/Typography";
import EventBox from "../JoinEventPage/EventBox";
import styled from "styled-components";
import SizedBox from "../../components/SizedBox";
import { id } from "date-fns/locale";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import EventService from "../../services/EventService";

export default function HostEventPage() {
  const [QRModalVisible, setQRModalVisible] = useState(false);

  const [hostEvents, setHostEvents] = useState([]);

  let naivate = useNavigate();

  useEffect(() => {
    EventService.getHostEvents("KIMEWHA")
      .then((res) => {
        if (res.status === 200) {
          setHostEvents(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handleRightIconClick = (id) => {
    setQRModalVisible(true);
    naivate(`/host/${id}`);
  };
  return (
    <HostEventPageLayout>
      <Title>김서연 </Title>
      <BodyRegular> 님께서 주최하신 행사 목록입니다.</BodyRegular>

      <EventList>
        {hostEvents.map((event) => (
          <EventBox
            type="host"
            event={event}
            key={event.event_id}
            onClick={() => handleRightIconClick(event.event_id)}
          />
        ))}
      </EventList>
      <QRModal
        id={id}
        title={EventListData[0].name}
        isOpen={QRModalVisible}
        closeModal={() => setQRModalVisible(false)}
      />
    </HostEventPageLayout>
  );
}
const HostEventPageLayout = styled.div`
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
