// 리다이렉트 화면
import React from "react";
import { useNavigate} from 'react-router-dom';
import styled from "styled-components";
import Spinner from "../components/Spinner";

const RedirectURI = (props) => {

  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get("code");



  if (code) {
    localStorage.setItem("code", code);
    localStorage.setItem("name", "가굠");
    window.alert('로그인성공')
    navigate.push('/')
  }

  return (
    <Wrap>
      <Spinner />
    </Wrap>
  )
};

const Wrap = styled.div`
  margin-top: 200px;
  min-height: 1100px;
`

export default RedirectURI;