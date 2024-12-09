import styled from "styled-components";
import {mobile} from '../responsive'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
 
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
        
          <Button onClick={handleClick}>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;


const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),  url('https://img.freepik.com/premium-photo/man-woman-sit-couch-with-laptop-plant-corner_1276840-42245.jpg');
background-repeat: no-repeat;
/* background-size: contain; */
background-size: cover;
background-position: center;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10px;


`

const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;

`

const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: white;
${mobile({width:'75%'})}

`
const Form = styled.form`
display: flex;
flex-direction: column;


`
const Title = styled.h1`
 font-size: 24px;
 font-weight: 300;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin:10px 0px;
padding: 10px;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
`