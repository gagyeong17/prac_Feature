// 리다이렉트 화면
import React from "react";
import styled from "styled-components";
import Spinner from "../components/Spinner";

const RedirectURI = (props) => {
  let token = new URL(window.location.href).searchParams.get("code");



  if (token) {
    localStorage.setItem("token", token);
    localStorage.setItem("name", "가굠");
    window.alert('로그인성공')
  }

  return (
    <Wrap>
      <Spinner />
    </Wrap>
  )
};

const Wrap = styled.div`
  margin-top: 100px;
`

export default RedirectURI;