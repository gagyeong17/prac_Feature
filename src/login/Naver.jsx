// 로그인 버튼 컴포넌트
import React from 'react'
import styled from "styled-components";
import naverBtn from '../assets/images/btnG_완성형.png'

const Naver = () => {

  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const REDIRECT_URI = 'http://localhost:3000/redirectUrl';
  const STATE = 'flase';
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&state=${STATE}`;

  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  }

    return (
      <Wrap>
        <img src={naverBtn} alt='네이버로그인' onClick={NaverLogin} />
      </Wrap>
    
  )
}

const Wrap = styled.div`
    border: 1px solid red;
    width: 500px;
    height: 150px;
    margin: 50px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`


export default Naver