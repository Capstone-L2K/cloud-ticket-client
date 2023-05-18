import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import styled from "styled-components";
import { Subtitle } from "../../styles/fonts/Typography";
const QRScanner = (props) => {
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

    setMessage("김이화 (외 1명) 입장 검증이 완료되었습니다.");

    const id = setInterval(() => {
      setMessage("");
      return clearInterval(id);
    }, 3000);
  };

  return (
    <Box>
      <Subtitle>입장 QR 코드를 스캔해주세요. </Subtitle>
      <QrReader
        onResult={handleScannedData}
        style={{ width: "100%", height: "500px" }}
      />
      <p>{data}</p>
    </Box>
  );
};

export default QRScanner;
const Box = styled.div`
  width: 100%;
  height: 100%;
`;
