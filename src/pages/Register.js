
import styled from "styled-components"
import {mobile} from '../responsive'
import { useNavigate } from 'react-router-dom';

const Register = () => {
   const navigate = useNavigate();

   const handleClick = () => {
     navigate('/login');
   };
  

  return (
    <Container>
       <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
             <Input placeholder="name"/>
             <Input placeholder="last name"/>
             <Input placeholder="username"/>
             <Input placeholder="email"/>
             <Input placeholder="password"/>
             <Input placeholder="confirm password"/>
             <Agrement>By Creating an account, I consent to the processing of my personal data in accoradance with the  <b>PRIVACY POLICY</b></Agrement>
             <Button onClick={handleClick}>Create</Button>
          </Form>
       </Wrapper>
    </Container>
  )
}

export default Register

const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6)),  url('https://www.sideqik.com/wp-content/uploads/2019/04/felipe-galvan-1176459-unsplash.jpg');
background-repeat: no-repeat;
background-size: contain;
background-size: cover;
background-position: center;
display: flex;
justify-content: center;
align-items: center;

`

const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: white;
${mobile({width:'75%'})}
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;

`
const Title = styled.h1`
 font-size: 24px;
 font-weight: 300;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Agrement = styled.span`
font-size: 12px;
margin: 20px 0px;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
`