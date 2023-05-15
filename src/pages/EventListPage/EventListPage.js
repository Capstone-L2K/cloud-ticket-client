import React from "react";
import EventCard from "./EventCard";
import EventLists from "../../db/EventData.json";
import styled from "styled-components";
import { Title, BodyRegular } from "../../styles/fonts/Typography";
import SizedBox from "../../components/SizedBox";
function EventListPage() {
  return (
    <EventListPageLayout>
      <Title>따끈따끈한 신규행사</Title>
      <BodyRegular>열린지 얼마안된 최신 행사들을 만나보세요!</BodyRegular>
      <SizedBox height="30px" />
      <EventList>
        {EventLists.map((e) => (
          <EventCard event={e} />
        ))}
      </EventList>
    </EventListPageLayout>
  );
}

export default EventListPage;
const EventListPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding-top: 30px;
`;

const EventList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  gap: 150px 30px;
`;
