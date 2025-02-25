import { Badge } from '@material-ui/core'
import { Height, Search,  ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import { useNavigate } from 'react-router-dom';






const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };





  return (
    <Container>
      <Wrapper>
        <Left>
            <Languege>En</Languege>
            <SearchContainer>
                <Input placeholder='Search'/>
                <Search style={{color:"gray", fontSize:16}}/>
            </SearchContainer>
           
        </Left>
       
        <Center><Logo>Hashmi</Logo></Center>
        <Right>
             <MenuItem onClick={handleClick}>REGISTER</MenuItem>
           
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
                <Badge color="primary" badgeContent={4}>
                <ShoppingCartOutlined/>
               </Badge>
            
            
            </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}
export default Navbar






const Container = styled.div`
    height: 60px;

    ${mobile({height: "50px "})}
    `
    
const Wrapper = styled.div`
     display: flex;
     padding:  10px 20px; 
     justify-content: space-between;
     ${mobile({padding:"10px 0px"})}
     
     `
const Left = styled.div`
     flex: 1;
     display: flex;
     align-items: center;
     
`
   
const Languege = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: 'none'})}

`
const SearchContainer= styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;



`
const Input = styled.input`
border: none;

${mobile({width: "50px "})}


`
     
const Logo = styled.h1`
 font-weight: bold;
 ${mobile({fontSize:"25px"})}
`
const Center = styled.div`
      flex: 1;
      text-align: center;
`
const  Right = styled.div`

    flex: 1;
    display: flex;
    gap: 25px;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex:2 , justifyContent:'center' ,gap:'10px'})}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({fontSize: "12px"})}
`
