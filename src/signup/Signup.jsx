import React from 'react'
import styled from 'styled-components'

const Signup = () => {
    const [tel, setTel] = React.useState("");
    const [num , setNum] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const number = (tel) => {
        const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        if (regPhone.test(tel) === true) {
            certification()
            setOpen(true)
                window.alert('번호합격')
            } else {
                window.alert('번호실패')
            }
    }

    const certification = () => {
            // try {
            //     tempAuthObj = await twilioHelper.auth(tel);
            //     if (tempAuthObj instanceof Error) {
            //     res.status(500).json({ error: tempAuthObj.message });
            //     } else {
            //     res.sendStatus(200);
            //     }
            // } catch (err) {
            //     console.error('error is ', err);
            //     res.status(500).json({ error: err });
            // }
    }

    const Chk = () => {
        //번호확인하러가기
        // const { userVerifyNum, userPhoneNum } = req.body;
        //     if (userVerifyNum !== undefined && userPhoneNum !== undefined) {
        //         if (tempAuthObj[userPhoneNum] === Number(userVerifyNum)) {
        //         delete tempAuthObj[userPhoneNum];
        //         res.sendStatus(200);
        //         } else {
        //         res.sendStatus(401);
        //         }
        //     } else {
        //         if (userPhoneNum === undefined || userPhoneNum === '') {
        //         res.status(400).json('변경할 휴대폰 번호를 입력해주세요');
        //         } else if (userVerifyNum === undefined) {
        //         res.status(400).json('인증번호를 입력해주세요');
        //         } else {
        //         res.status(400).json('변경할 휴대폰 번호를 입력해주세요');
        //         }
        //     }
    }

  return (
      <Container>
        <Box>
            {/* <InputStyle placeholder=' ID' />
            <InputStyle placeholder=' PW' /> */}
            <InputStyle placeholder=' Phone Number' onChange={(e) => { setTel(e.target.value) }} />   
            <Btn onClick={number}>인증번호 발송</Btn>
              {open ? (<>
                <InputStyle placeholder=' 인증번호 입력' onChange={(e) => { setNum(e.target.value) }} />   
                <Btn onClick={Chk}>인증번호 확인</Btn>
              </>) : null}  
        </Box>   
    </Container>
  )
}

const Container = styled.div`
    border : 1px solid red;
    width: 90%;
    height: 500px;
    margin: auto;
`

const Box = styled.div`
    /* border : 1px solid orange; */
    width: 500px;
    height: 500px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

const InputStyle = styled.input`
    border: none;
    border-bottom: 1px solid #ddd;
    width: 300px;
`

const Btn = styled.button`
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 50px;
`

export default Signup