import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./login/Signup";
import Naver from "./login/Naver";
import RedirectURI from "./login/RedirectUrl";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Naver />} />
        <Route path="/redirectUrl" exact element={<RedirectURI />} />
        <Route path="/signUp" exact element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
