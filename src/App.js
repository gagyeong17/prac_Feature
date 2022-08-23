import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./signup/Signup";
import Naver from "./login/Naver";
import RedirectURI from "./login/RedirectUrl";
import Notification from "./notification/Notification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 소셜로그인 */}
        <Route path="/" exact element={<Naver />} />
        <Route path="/redirectUrl" exact element={<RedirectURI />} />
        {/* 번호인증 */}
        <Route path="/signUp" exact element={<Signup />} />
        {/* 알림 API*/}
        <Route path="/notification" exact element={<Notification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
