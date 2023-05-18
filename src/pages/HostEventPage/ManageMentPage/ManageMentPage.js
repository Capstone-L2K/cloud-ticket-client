import React from "react";
import { Routes, Route, useNavigate } from "react-router";

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
function ManageMentPage() {
  const { id } = useParams();
  let navigate = useNavigate();

  const { name, datetime_string, place } = EventListData[id];
  return (
    <ManagementPageLayout>
      <Title>{name}</Title>
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
          description={"전체 티켓 수 + 50매"}
          onClick={() => navigate("ticket")}
        />
        <FlatLinkBox
          title={"실시간 참여자 관리"}
          iconSrc={PeopleIconSrc}
          description={"1 / 30 명"}
          onClick={() => navigate("participants")}
        />

        <FlatLinkBox
          title={"정산관리"}
          iconSrc={MoneyIconSrc}
          description={"1000원"}
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
`;
export default ManageMentPage;
