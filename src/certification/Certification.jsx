import React from 'react'
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import styled from 'styled-components';

const Certification = () => {
    const navigate = useNavigate()
    const [phone, setNum] = React.useState('')
    // console.log(num)
    
//     const pass = ((error, values) => {
//         const userCode = 'imp10391932';
//         const { IMP } = window;
//           IMP.init(userCode);
//           IMP.certification(num, callback);
//         })

//     /* 본인인증 후 콜백함수 */
//     function callback(response) {
//       console.log(response)
//     const query = queryString.stringify(response);
//     navigate(`/result?${query}`);
//   }
    
    const pass = ((error, values) => {
        const userCode = 'imp10391932';
        const { IMP } = window;
            IMP.init(userCode);
            IMP.certification(phone, rsp => {
                console.log('리스폰스',rsp)
                if (rsp.success) {
                    navigate('/result')
                    console.log('성공')
                     // axios로 HTTP 요청
                    // axios({
                    //     url: "{서버의 인증 정보를 받는 endpoint}", // 예: https://www.myservice.com/certifications
                    //     method: "post",
                    //     headers: { "Content-Type": "application/json" },
                    //     data: { imp_uid: rsp.imp_uid }
                    // });
                } else {
                    console.log('실패')
                }
          });
        })

    /* 본인인증 후 콜백함수 */
//     function callback(response) {
//       console.log(response)
//     const query = queryString.stringify(response);
//     navigate(`/result?${query}`);
//   }
  return (
    <Wrapper>
      <Header>아임포트 본인인증 테스트</Header>
      <FormContainer >
        {/* <div>
            <input size="large" type="number" addonBefore="전화번호" onChange={(e) => {setNum(e.target.value)}}/>
        </div> */}
        <button onClick={pass}>
          본인인증하기
        </button>
      </FormContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 7rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 2rem;
  padding-top: 0;
  font-size: 3rem;
`;

const FormContainer = styled.div`
  width: 350px;
  border-radius: 3px;
  /* background-color: #344e81; */

  input {
    width: 100%;
    text-align: left;
    color: #888;
    font-size: 1.2rem;
    border: none;
    border-bottom: 1px solid #888;
    /* border-radius: 4px; */
    background-color: inherit;
  }
  button {
    width: 100%;
    height: 5rem;
    font-size: 1.6rem;
    margin-top: 2rem;
    /* border-radius: 4px; */
  }
`;

// const CertificationForm = Form.create({ name: 'certification' })(Certification);


export default Certification