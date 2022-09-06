import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Sms = () => {
    const [title, setTitle] = React.useState('')
    const [txt, setTxt] = React.useState('')
    console.log('제목', title)
    console.log('내용', txt)
    const send = () => {
    // window.alert(title,txt)
        // const KakaoURL = 'https://kapi.kakao.com/v2/api/talk/memo/default/send'
        // 카카오톡 액세스토큰
        axios.post('서버주소', {txt},
            { headers: { Authorization: "Bearer " + process.env.REACT_APP_ACCESS_TOKEN } }
        )
    }

    return (
            <Wrap>
                <Container>
                    <Box>
                       <TitleTxt>제목</TitleTxt>
                    <Title onChange={(e) => {setTitle(e.target.value)} } /> 
                    </Box>
                    <Text onChange={(e) => {setTxt(e.target.value)} }/>
                    <Btn onClick={send}>즉시 발송</Btn>    
                </Container>
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
`
const Container = styled.div`
    width:300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Box = styled.div`
    width:600px;
    display: flex;
    flex-direction: row;
    gap: 38px;
    margin-top: 20px;
`
const Btn = styled.button`
    background-color: #343a40;
    border-radius: 5px;
    border: none;
    color: #fff;
    height:40px;
    width:111px;
`
const Text = styled.textarea`
    width: 400px;
    height: 500px;
    border: 1px solid #eeeeee;
    padding: 10px;
`
const Title = styled.input`
    width:330px;
    border: 1px solid #eeeeee;
    padding: 10px;
`
const TitleTxt = styled.div`
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
`
export default Sms