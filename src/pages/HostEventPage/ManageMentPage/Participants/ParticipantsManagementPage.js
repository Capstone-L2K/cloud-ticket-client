import React, { useState, useEffect } from "react";
import QRScanner from "../../QRScanner";
import styled from "styled-components";
import ParticipantsBox from "../InfoBox";
import { BodySmall } from "../../../../styles/fonts/Typography";
import ParticipantsLog from "./ParticipantsLog";
import InfoBox from "../InfoBox";
import ScanIconSrc from "../../../../assets/icons/qr-scanner.svg";

import { ScanQRModal } from "../../../../components/modals/ScanQRModal";
export default function ParticipantsManagementPage() {
  const [participants, setParticipants] = useState([]);
  const [QRScanModalVisible, setQRScanModalVisible] = useState(false);

  const handleOnClickQRScanner = () => {
    setQRScanModalVisible(true);
  };
  useEffect(() => {
    const participants = JSON.parse(localStorage.getItem("participants"));

    console.log(participants);
    if (participants) {
      setParticipants(participants);
    }
  }, []);
  return (
    <ParticipantsManagementPageLayout>
      <Col>
        <BodySmall fw={700}>참여자 관리</BodySmall>
        <InfoBox
          title={"전체 참여 인원"}
          content={`${participants?.length} / 30명`}
          iconSrc={ScanIconSrc}
          onClick={handleOnClickQRScanner}
        />
      </Col>
      <Col>
        <BodySmall fw={700}>참여자</BodySmall>

        {participants.map(({ date, name, num_of_person }) => (
          <ParticipantsLog date={date} name={name} num_of_person={1} />
        ))}
      </Col>
      <ScanQRModal
        isOpen={QRScanModalVisible}
        closeModal={() => setQRScanModalVisible(false)}
        setParticipants={setParticipants}
      />
    </ParticipantsManagementPageLayout>
  );
}
const ParticipantsManagementPageLayout = styled.div`
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
