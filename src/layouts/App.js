import React from "react";
import { css } from "styled-components";
import { useMediaQuery } from "react-responsive";
import Header from "./Header/Header";
import styled from "styled-components";
import {
  LandingPage,
  RegisterPage,
  CreateEventPage,
  LoginPage,
  EventListPage,
  EventDetailPage,
  HostEventPage,
  JoinEventPage,
  ReserveTicketPage,
  ManageMentPage,
  ManagementRoute,
} from "../pages";

import PrivateRoute from "../utils/PrivateRoute";
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
        {/* 인증여부에 상관없이 누구나 접속 가능한 페이지 정의 */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/event" element={<EventListPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />

        {/* 인증을 반드시 하지 않아야만 접속 가능한 페이지 정의 */}
        <Route element={<PrivateRoute authentication={false} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* 인증을 반드시 해야지만 접속 가능한 페이지 정의 */}
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/create" element={<CreateEventPage />} />
          <Route path="/join" element={<JoinEventPage />} />
          <Route path="/host" element={<HostEventPage />} />
          <Route path="/host/:id/*" element={<ManagementRoute />} />
          <Route path="/event/:id/reserve" element={<ReserveTicketPage />} />
        </Route>

        {/* 매칭되지 않는 url 경로 접근시 */}
        <Route path="/*" element={<CreateEventPage />} />
      </Routes>
    </AppLayout>
  );
}

const AppLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
`;
