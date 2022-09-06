import React from 'react'
// import axios from 'axios'
import styled from 'styled-components'

const Posting = () => {
    const [title, setTitle] = React.useState('')
    const [txt, setTxt] = React.useState('')
    const [image, setImage] = React.useState("")
    console.log('제목', title, '내용', txt)
    // 이미지 관련
    const fileInput = React.useRef();

    // 파일 선택
    const selectFile = (e) => {
        const reader = new FileReader();
        const file = fileInput.current.files[0];
        console.log(file)
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImage(reader.result)
        };
    };
    
    const send = () => {
        const formData = new FormData();
        formData.append("img", image);
        formData.append("title", title);
        formData.append("txt", txt);
        if (!title || !txt) {
            alert('다시 입력해주세요')
        } else {
        //     axios.post('서버주소', formData,
        //     { headers: { Authorization: "Bearer " + process.env.REACT_APP_ACCESS_TOKEN } }
        //     ).then((res) => {
        //     console.log(res)
        //     }).catch((err) => {
        //     console.log(err)
        // })
            alert('게시글 등록 성공')
        }
    }
  return (
     <Wrap>
        <Container>
            <Box>
                <TitleTxt>제목</TitleTxt>
                <Title onChange={(e) => {setTitle(e.target.value)} } /> 
              </Box>
                 <input type="file"
                      onChange={selectFile}
                      ref={fileInput}
                      // disabled={is_uploading}
                    />
                <Text onChange={(e) => {setTxt(e.target.value)} }/>
                <Btn onClick={send}>게시글 업로드</Btn>    
        </Container>
    </Wrap>
  )
}

const Wrap = styled.div`
    width:400px;
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

export default Posting