import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./signup/Signup";
import Naver from "./login/Naver";
import RedirectURI from "./login/RedirectUrl";
import Notification from "./notification/Notification";
import Certification from "./certification/Certification";
import Result from "./certificationResult/Result";
import Check from "./notice/Check";
import Sms from "./message/Sms";
import Pw from "./signup/Pw";
import Calendar from "./calendar/Calendar";
import PieChart from "./chart/PieChart";
import Login from "./login/Login";
import Posting from "./notice/Posting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 소셜로그인_Naver */}
        <Route path="/" exact element={<Naver />} />
        <Route path="/redirectUrl" exact element={<RedirectURI />} />
        {/* 번호인증_PASS */}
        <Route path="/signUp" exact element={<Signup />} />
        <Route path="/certification" exact element={<Certification />} />
        <Route path="/result" exact element={<Result />} />
        {/* 알림톡/메시지*/}
        <Route path="/notification" exact element={<Notification />} />
        <Route path="/sms" exact element={<Sms />} />
        {/* 선택삭제를 해볼까해 */}
        <Route path="/check" exact element={<Check />} />
        {/* 비밀번호 유효성검사 */}
        <Route path="/pw" exact element={<Pw />} />
        {/* 캘린더 연동 */}
        <Route path="/calendar" exact element={<Calendar />} />
        {/* 파이그래프 */}
        <Route path="/pie" exact element={<PieChart />} />
        {/* 로그인 */}
        <Route path="/login" exact element={<Login />} />
        {/* 게시판을 해볼까해 */}
        <Route path="/posting" exact element={<Posting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
