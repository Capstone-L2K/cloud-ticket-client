import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import Tag from "../../../components/Tag";
import EventListData from "../../../db/EventData.json";
import TitleBox from "./LinkBox";
import { Title } from "../../../styles/fonts/Typography";
import { useParams } from "react-router";
import LinkBox from "./LinkBox";
import styled from "styled-components";
import FlatLinkBox from "./FlatLinkBox";
import PeopleIconSrc from "../../../assets/icons/people.svg";
import MoneyIconSrc from "../../../assets/icons/money.svg";
import SizedBox from "../../../components/SizedBox";
import { useLocation } from "react-router";
import EventService from "../../../services/EventService";
function ManageMentPage() {
  const { id } = useParams();
  let navigate = useNavigate();
  const { state } = useLocation();

  const {
    event_name: name,
    event_date: datetime_string,
    event_loc: place,
  } = state;

  const [event, setEvent] = useState();
  const handleToggleEvent = () => {
    let question =
      eventState === 0 ? "행사를 오픈하시겠습니까?" : "행사를 닫으시겠습니까? ";
    // let result = window.confirm(question);

    //if (result) {
    setEventState((prev) => !prev);
    //}
  };

  useEffect(() => {
    EventService.getEventDetail(id)
      .then((res) => {
        if (res.status === 200) {
          setEvent(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const [eventState, setEventState] = useState(1); // 0 : 시작전 , 1: 진행 중
  return (
    <ManagementPageLayout>
      <Tag state={eventState}>{eventState === 0 ? "시작전" : "진행 중"}</Tag>
      <Title>{name}</Title>
      <SizedBox height="2rem" />

      <div style={{ alignSelf: "flex-end" }}>
        <Tag state={eventState} onClick={handleToggleEvent}>
          {eventState === 0 ? "행사 오픈하기" : "행사 닫기"}
        </Tag>{" "}
      </div>
      <SizedBox height="2rem" />
      <Col>
        <LinkBox
          title={"행사개요"}
          detail={datetime_string}
          description={place}
          onClick={() => navigate("overview")}
        />
        <LinkBox
          title={"티켓"}
          detail={name + "입장권"}
          description={"전체 티켓 수 : 30매"}
          onClick={() => navigate("ticket")}
        />
        <FlatLinkBox
          title={"실시간 참여자 관리"}
          iconSrc={PeopleIconSrc}
          description={"2 / 30 명"}
          onClick={() => navigate("participants")}
        />

        <FlatLinkBox
          title={"정산관리"}
          iconSrc={MoneyIconSrc}
          description={"2000 원"}
          onClick={() => navigate("financials")}
        />
      </Col>
    </ManagementPageLayout>
  );
}
const ManagementPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  padding: 30px 0px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  width: 100%;
`;
export default ManageMentPage;
