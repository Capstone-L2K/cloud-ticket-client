import React from "react";
import InfoBox from "../InfoBox";
import styled from "styled-components";
import WithDrawlIconSrc from "../../../../assets/icons/withdrawal.svg";
import { BodySmall } from "../../../../styles/fonts/Typography";
import PaymentLog from "./PaymentLog";
export default function FinancialManagementPage() {
  const handleOnClickWithDrawal = () => {
    console.log("인출");
  };

  return (
    <FinancialManagementPageLayout>
      <Col>
        <BodySmall fw={700}>정산 관리</BodySmall>
        <InfoBox
          title={"총 금액"}
          content={"2000 원"}
          iconSrc={WithDrawlIconSrc}
          onClick={handleOnClickWithDrawal}
        />
        <div style={{ alignSelf: "flex-end" }}>
          <BodySmall>잔여 티켓 : 28 / 30 매</BodySmall>
        </div>
      </Col>
      <Col>
        <BodySmall fw={700}>결제 내역</BodySmall>
        <PaymentLog
          date={"05-26 13:45:00"}
          name={"김서연"}
          price={"1000"}
          num_of_ticket={1}
        />
        <PaymentLog
          date={"05-26 13:47:00"}
          name={"이승연"}
          price={"1000"}
          num_of_ticket={1}
        />
      </Col>
    </FinancialManagementPageLayout>
  );
}
const FinancialManagementPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;
  width: 100%;
  padding-top: 5%;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;
