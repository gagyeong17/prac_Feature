import React from 'react'
import styled from 'styled-components'

const Login = () => {
    const [num, setNum] = React.useState()
    const [checkcheck, setCheck] = React.useState()
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [gender, setGender] = React.useState()
    const [birth, setBirth] = React.useState('')

    const CHK = () => {
    if (num === "" || email ==='' || name === '' || gender === '' || birth === '') {
      window.alert('입력해라')
      return;
    } else {
        chk(num,email)
        }
    }
    
    const chk = (num,email) => {
    const Email = /^[\w.-]{1,64}@[\w.-]{1,125}.\w{2,4}$/;
    // 영문, 숫자, 특수문자를 10자리 이상 포함
    const check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;

    if (!check.test(num) || !Email.test(email) || (num !== checkcheck)) {
            window.alert('비번 확인이나 유효성 검사 맞지않음')
            return;
        }   if (check.test(num) || Email.test(email) || (num === checkcheck)) {
                window.alert('pass!')
                signUp()
        } 
    }

    const signUp = () => {
        console.log('이름:', name, '이메일:', email, '비밀번호:', num, '비번확인:', checkcheck, '생년월일:', birth, '성별:', gender )
    }
  return (
      <Wrap>
        <Title type='email' onChange={(e)=>{setName(e.target.value)}} placeholder='name'/>          
        <Title type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='email' />         
        <Title type='password' onChange={(e) => { setNum(e.target.value) }} placeholder='password' />
        <Title type='password' onChange={(e) => { setCheck(e.target.value) }} placeholder='password check' />
        <Title onChange={(e) => { setBirth(e.target.value) }} placeholder='yyyymmdd' maxLength={8}/> 
        <Chkbox>
            <div>
                <input name='gender' type='radio' value ='여자' onChange={(e) => { setGender(e.target.value) }}/><label>여자</label>   
            </div>
            <div>
                <input name='gender' type='radio' value ='남자' onChange={(e) => { setGender(e.target.value) }}/><label>남자</label>   
            </div>           
        </Chkbox>   
        <Btn onClick={CHK}>회원가입 / 로그인</Btn>
    </Wrap>
  )
}

const Wrap = styled.div`
    width:400px;
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
const Chkbox = styled.div`
    width:330px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
`
const Btn = styled.button`
    background-color: #343a40;
    border-radius: 5px;
    border: none;
    color: #fff;
    height:40px;
    width:111px;
`

export default Login;