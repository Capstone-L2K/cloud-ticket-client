import React, { useState } from "react";
import EventList from "../../../../db/EventData.json";
import { useParams } from "react-router";
import styled from "styled-components";
import SizedBox from "../../../../components/SizedBox";
import UpSrc from "../../../../assets/icons/up.svg";
import DownSrc from "../../../../assets/icons/down.svg";
import SvgIcon from "../../../../components/SvgIcon";
import useInput from "../../../../hooks/useInput";
import { SquareBtn } from "../../../CreateEventPage/form/SquareBtn";
import { Input } from "../../../CreateEventPage/form/Input";
import { Subtitle, BodyRegular } from "../../../../styles/fonts/Typography";
export default function ReserveTicketPage() {
  const { id } = useParams();

  const {
    name,
    place,
    ticket_price,
    contents,
    datetime_string,
    num_of_persons,
  } = EventList[id];

  const [numOfTickets, setNumOfTickets] = useState(0);
  const [reservator, handleReservatorChange] = useInput("");
  const [phoneNumber, handlePhoneNumberChange] = useInput("");
  const [email, handleEmailChange] = useInput("");

  const addTicket = () => {
    setNumOfTickets((prev) => prev + 1);
  };

  const minusTicket = () => {
    setNumOfTickets((prev) => prev - 1);
  };

  function onClickPayment() {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp81273170");

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "INIpayTest", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 1000, // 결제금액
      name: `[클라우드 티켓] ${name} 티켓 구매 `, // 주문명
      buyer_name: reservator, // 구매자 이름
      buyer_tel: phoneNumber, // 구매자 전화번호
      buyer_email: email, // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  return (
    <ReserveTicketPageLayout>
      <EventBannerImage src={require("../../../../assets/demo/poster1.png")} />
      <TicketBox>
        <Subtitle>{ticket_price}</Subtitle>
        <Subtitle>X</Subtitle>
        <Subtitle> {numOfTickets}</Subtitle>
        <Subtitle> = {ticket_price * numOfTickets}원</Subtitle>

        <Col>
          <SvgIcon src={UpSrc} onClick={() => addTicket} />
          <SvgIcon src={DownSrc} onClick={() => minusTicket} />
        </Col>
      </TicketBox>

      <Form>
        <Subtitle>예매자 정보 입력</Subtitle>
        <SizedBox height="10px" />
        <Row>
          <CustomBodyRegular>이름</CustomBodyRegular>
          <Input value={reservator} onChange={handleReservatorChange} />
        </Row>

        <Row>
          <CustomBodyRegular>전화번호</CustomBodyRegular>
          <Input value={phoneNumber} onChange={handlePhoneNumberChange} />
        </Row>
        <Row>
          <CustomBodyRegular>전화번호</CustomBodyRegular>
          <Input value={email} onChange={handleEmailChange} />
        </Row>
      </Form>
      <SquareBtn onClick={onClickPayment}>결제하기</SquareBtn>
    </ReserveTicketPageLayout>
  );
}
const ReserveTicketPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100vw;
  padding: 2rem 0;
`;

const CustomBodyRegular = styled(BodyRegular)`
  white-space: nowrap;
`;
const EventBannerImage = styled.img`
  object-fit: cover;
  height: 230px;
  width: 100%;
`;
const TicketBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 120px;
  border-bottom: 1px solid var(--gray300);
  padding: 30px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 1rem;
  width: 100%;
`;
