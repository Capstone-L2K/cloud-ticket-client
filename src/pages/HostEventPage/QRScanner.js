import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import styled from "styled-components";
import { Subtitle } from "../../styles/fonts/Typography";

const QRScanner = ({ setParticipants }) => {
  const [data, setData] = useState("No result");

  const [message, setMessage] = useState("");

  const handleScannedData = (result, error) => {
    if (!!result) {
      setData(result?.text);
    }

    if (!!error) {
      console.info(error);
    }

    // 해당 data로 검증하기

    if (
      result?.text ===
      "$2b$12$alhHadg3432%FDADF/SFDRcNNRMP6UHjMQSFPppcE.4DMqREk6"
    ) {
      setMessage("김이화 님 (1명) 입장 검증이 완료되었습니다.");
      setParticipants((prev) => [
        ...prev,
        {
          name: "김이화",
          date: new Date().toTimeString().slice(0, 8),
          num_of_person: 1,
        },
      ]);
    }
  };

  return (
    <Box>
      <Subtitle>입장 QR 코드를 스캔해주세요. </Subtitle>
      <QrReader
        onResult={handleScannedData}
        style={{ width: "100%", height: "500px" }}
      />
      <p>{data}</p>
      <p>{message}</p>
    </Box>
  );
};

export default QRScanner;
const Box = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
