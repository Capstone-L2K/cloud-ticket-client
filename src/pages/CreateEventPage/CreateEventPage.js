import React, { useRef, useState } from "react";
import { Title, Subtitle, BodySmall } from "../../styles/fonts/Typography";
import { Navigate, useParams } from "react-router";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import SizedBox from "../../components/SizedBox";
import { Link } from "react-router-dom";
import HostForm from "./HostForm";
import EventForm from "./EventForm";
import TicketForm from "./TicketForm";
import { useNavigate } from "react-router";
import CreateCompleted from "./CreateCompleted";
import EventService from "../../services/EventService";
import CustomTicket from "./CustomTicket";
export default function CreateEventPage() {
  const [step, setStep] = useState(0);

  const hostInputs = useRef({
    email: "",
    phone_number: "",
  });

  const eventInputs = useRef({
    name: "",
    category: " ",
    contents: "",
    date: new Date(),
    place: "",
  });

  const ticketInputs = useRef({
    ticket_name: "",
    price: 0,
    ticket_limit_per_person: 1,
    num_of_total_tickets: 10,
  });

  function convertDateFormat(date) {
    let dateFormat =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1 < 9
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) +
      "-" +
      (date.getDate() < 9 ? "0" + date.getDate() : date.getDate());
    return dateFormat;
  }
  const handleCreateEvent = () => {
    // yyyy-mm-dd 로 변환
    var date_formattened = convertDateFormat(
      new Date(eventInputs.current.date)
    );

    const time = new Date(eventInputs.current.date).toTimeString().slice(0, 8);

    var body = {
      event_name: eventInputs.current.name,
      category_id: "1",
      event_content: eventInputs.current.contents,
      event_date: date_formattened + " " + time,
      event_loc: eventInputs.current.place,
    };

    console.log(body);
    EventService.createEvent(body).then((res) => {
      console.log(res);
      if (res.status === 200) {
        if (res.data.statusCode === 200) {
          setStep(4);
        } else {
          const parsed = JSON.parse(res.data.body);
          console.log(parsed);
          alert(parsed.message);
        }
      }
    });
  };

  const contents = [
    <HostForm setStep={setStep} hostInputs={hostInputs} />,
    <EventForm setStep={setStep} eventInputs={eventInputs} />,
    <TicketForm
      setStep={setStep}
      ticketInputs={ticketInputs}
      handleCreateEvent={handleCreateEvent}
    />,
    <CustomTicket setStep={setStep} />,
    <CreateCompleted />,
  ];

  return (
    <CreateEventPageLayout>{contents[parseInt(step)]}</CreateEventPageLayout>
  );
}

const CreateEventPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  padding-top: 5vh;

  height: 100%;
  width: 100%;
  margin: 0;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Label = styled.label`
  margin-bottom: 16px;

  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`;

export const Error = styled.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;

export const Success = styled.div`
  color: #2eb67d;
  font-weight: bold;
`;

export const LinkContainer = styled.p`
  font-size: 13px;
  color: #616061;
  margin: 0 auto 8px;
  width: 400px;
  max-width: 400px;

  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;
