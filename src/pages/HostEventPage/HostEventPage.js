import React, { useState } from "react";
import { QRModal } from "../../components/modals/QRModal";
import EventListData from "../../db/EventData.json";
import { Title, BodyRegular } from "../../styles/fonts/Typography";
import EventBox from "../JoinEventPage/EventBox";
import styled from "styled-components";
import SizedBox from "../../components/SizedBox";
import { getUser } from "../../utils/User";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import EventService from "../../services/EventService";

export default function HostEventPage() {
  const [QRModalVisible, setQRModalVisible] = useState(false);

  const [hostEvents, setHostEvents] = useState([
    {
      event_id: 54,
      event_name: "N.Flying 소극장 콘서트 - 우만합 : 우리 만나",
      banner:
        "https://cloudticket-event.s3.ap-northeast-2.amazonaws.com/banner/default.jpg",
      event_date: "2023-05-06",
      event_loc: "KT&G 상상마당 홍대 라이브홀",
    },
  ]);

  const userInfo = getUser();
  let naivate = useNavigate();

  useEffect(() => {
    /*
    EventService.getHostEvents("KIMEWHA")
      .then((res) => {
        if (res.status === 200) {
          setHostEvents(res.data);
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
      */
  }, []);
  const handleRightIconClick = (event) => {
    naivate(`/host/${event.event_id}`, { state: event });
  };

  return (
    <HostEventPageLayout>
      <Title>{userInfo.name} </Title>
      <BodyRegular> 님께서 주최하신 행사 목록입니다.</BodyRegular>

      <EventList>
        {hostEvents.map((event) => (
          <EventBox
            type="host"
            event={event}
            key={event.event_id}
            onClick={() => handleRightIconClick(event)}
          />
        ))}
      </EventList>
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
