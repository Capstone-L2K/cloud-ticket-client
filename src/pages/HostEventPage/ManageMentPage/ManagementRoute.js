import React from "react";
import { Routes, Route, useNavigate } from "react-router";
import {
  OverViewManagePage,
  TicketManagePage,
  ParticipantsManagementPage,
  FinancialManagementPage,
  ManageMentPage,
} from "../../index";
export default function ManagementRoute() {
  return (
    <Routes>
      <Route path="/" element={<ManageMentPage />} />
      <Route path="/overview" element={<OverViewManagePage />} />
      <Route path="/ticket" element={<TicketManagePage />} />
      <Route path="/participants" element={<ParticipantsManagementPage />} />
      <Route path="/financials" element={<FinancialManagementPage />} />
    </Routes>
  );
}
