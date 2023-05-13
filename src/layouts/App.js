import React from "react";
import { css } from "styled-components";
import { useMediaQuery } from "react-responsive";
import "./layout.scss";
import Header from "./Header/Header";
import styled from "styled-components";
import LandingPage from "../pages/LandingPage/LandingPage.";
import { Routes, Route } from "react-router";

/**
 * 미디어 쿼리 기준
 * ~ 768 : 모바일뷰
 * 768 ~ 1024 : 아이패드 뷰
 * 1024 ~ : 데스크탑 뷰
 */
export default function App() {
  return (
    <AppLayout>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      {/** */}
    </AppLayout>
  );
}

const AppLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
`;
