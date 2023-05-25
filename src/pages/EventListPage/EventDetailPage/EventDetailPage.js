import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Title,
  Subtitle,
  Caption,
  BodySmall,
  BodyRegular,
  BodyLarge,
  BodyXSmall,
} from "../../../styles/fonts/Typography";
import { useNavigate, useParams } from "react-router";
import EventList from "../../../db/EventData.json";
import { SquareBtn } from "../../CreateEventPage/form/SquareBtn";
import PeopleSrc from "../../../assets/icons/people.svg";
import TicketIconSrc from "../../../assets/icons/ticket.svg";
import SvgIcon from "../../../components/SvgIcon";
import SizedBox from "../../../components/SizedBox";
import EventService from "../../../services/EventService";
export default function EventDetailPage() {
  // 이벤트 id 로 이벤트 정보 fetching

  const { id } = useParams();

  const [event, setEvent] = useState({
    name: "",
    place: "",
    ticket_price: 3000,
    contents: "",
    datetime_string: "",
    num_of_persons: 0,
  });
  const {
    event_name: name,
    event_loc: place,
    ticket_price: ticket_price,
    event_content: contents,
    event_date: datetime_string,
    num_of_persons,
    banner,
  } = event;

  let naivate = useNavigate();
  const handleClickReserveBtn = () => {
    naivate(`/event/${id}/reserve`, {
      state: { name, ticket_price: 1000, banner },
    });
  };

  useEffect(() => {
    EventService.getEventDetail(id)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setEvent(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <EventDetailPageLayout>
      <EventBannerImage src={banner} />
      <Title>{name}</Title>
      <SizedBox height="20px" />
      <BodyRegular>{datetime_string}</BodyRegular>

      <Caption>@ {place}</Caption>
      <Row>
        <SvgIcon src={PeopleSrc} size="12px" />
        <BodyRegular>{num_of_persons}</BodyRegular>
      </Row>

      <Row>
        <SvgIcon src={TicketIconSrc} size="12px" />
        <BodyRegular>{ticket_price}</BodyRegular>
      </Row>
      <Section>{contents}</Section>

      <SquareBtn onClick={handleClickReserveBtn}>참여하기</SquareBtn>
    </EventDetailPageLayout>
  );
}
const EventDetailPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 30px 0;
`;

const EventBannerImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 230px;
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
const Section = styled.main`
  border-top: 0.5px solid var(--gray300);
  border-bottom: 0.5px solid var(--gray300);

  width: 100%;

  padding: 20px 0;
  margin: 20px 0;
`;
