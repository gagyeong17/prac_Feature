import React from 'react'
import styled from 'styled-components';

const Pw = () => {
    const [num, setNum] = React.useState()
    // 정규 표현식 (영문, 숫자, 특수문자를 10자리 이상 포함)
    let check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;

    //이메일
    const email = /^[\w.-]{1,64}@[\w.-]{1,125}.\w{2,4}$/;

    const chk = (num) => {
        // 정규 표현식을 통과하지 못하면
        if(!check.test(num)) {
            window.alert('떙! 비번 다시 입력')
        } else {
            window.alert('pass!')
            
        }
    }

  return (
    <Wrap>
        <Title type='password' onChange={(e)=>{setNum(e.target.value)}}/>
        <Btn onClick={chk(num)}>첵첵</Btn>
    </Wrap>
  )
}
const Wrap = styled.div`
    width:400px;
    /* height: 589px; */
    /* border : 1px solid #eee; */
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    gap: 10px;
`
const Title = styled.input`
    width:330px;
    border: 1px solid #eeeeee;
    padding: 10px;
`
const Btn = styled.button`
    background-color: #343a40;
    border-radius: 5px;
    border: none;
    color: #fff;
    height:40px;
    width:111px;
`
export default Pw;