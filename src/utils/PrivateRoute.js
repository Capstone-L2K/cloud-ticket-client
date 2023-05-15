import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ authentication }) {
  /**
   * 로그인 했는지 여부
   * 로그인 했을 경우 : true 라는 텍스트 반환
   * 로그인 안했을 경우 : null or false(로그아웃 버튼 눌렀을경우 false로 설정) 반환
   */
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (authentication) {
    // 인증이 반드시 필요한 페이지

    // 인증을 안했을 경우 로그인 페이지로, 했을 경우 해당 페이지로
    if (isAuthenticated === null || isAuthenticated === "false") {
      alert("로그인이 필요한 페이지 입니다.");
      return <Navigate to="/login" />;
    } else {
      return <Outlet />;
    }
  } else {
    // 인증이 반드시 필요 없는 페이지

    // 인증을 안했을 경우 해당 페이지로 인증을 한 상태일 경우 main페이지로
    if (isAuthenticated === null || isAuthenticated === "false") {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
  }
}
