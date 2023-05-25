import React, { useState } from "react";
import EventCard from "./EventCard";
import EventLists from "../../db/EventData.json";
import styled from "styled-components";
import { Input } from "../CreateEventPage/form/Input";
import { Title, BodyRegular } from "../../styles/fonts/Typography";
import SizedBox from "../../components/SizedBox";
import SearchIconSrc from "../../assets/icons/search.svg";
import SvgIcon from "../../components/SvgIcon";
import { useEffect } from "react";
import EventService from "../../services/EventService";
import axios from "axios";
import useInput from "../../hooks/useInput";
function EventListPage() {
  const [events, setEvents] = useState([]);

  const [searchInput, handleChangeSearchInput] = useInput("");
  useEffect(() => {
    EventService.getEvents()
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setEvents(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <EventListPageLayout>
      <Search onChange={handleChangeSearchInput} />
      <Title>따끈따끈한 신규행사</Title>
      <BodyRegular>열린지 얼마안된 최신 행사들을 만나보세요!</BodyRegular>
      <SizedBox height="30px" />
      <EventList>
        {events
          .filter(({ event_name }) => event_name.includes(searchInput))
          .map((e) => (
            <EventCard event={e} key={e.event_id} />
          ))}
      </EventList>
    </EventListPageLayout>
  );
}

export default EventListPage;

function Search({ onChange }) {
  return (
    <Row>
      <SvgIcon src={SearchIconSrc} />
      <Input onChange={onChange} />
    </Row>
  );
}
const EventListPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 30px 0;
`;

const EventList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  gap: 50px 30px;
  margin: 2rem 0;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;
