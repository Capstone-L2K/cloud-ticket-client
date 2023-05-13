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

        {/* 인증을 반드시 하지 않아야만 접속 가능한 페이지 정의 */}
        <Route element={<PrivateRoute authentication={false} />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />

        {/* 인증을 반드시 해야지만 접속 가능한 페이지 정의 */}
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/create/*" element={<CreateEventPage />} />
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
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
`;
