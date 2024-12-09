import { Facebook, Instagram, MailOutline, Phone, Pinterest, Twitter,Room } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Hashmi</Logo>
            <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
            </Desc>
            <SocialContainer>
                
                <Socialicon color='#E4405F'>
                   <Instagram/>
                </Socialicon>
                <Socialicon color='#55ACEE'>
                    <Twitter/>
                </Socialicon>
                <Socialicon color='#E60023'>
                    <Pinterest/>
                </Socialicon>
                <Socialicon color='#3B5999'>
                    <Facebook/>
                </Socialicon>
                
            </SocialContainer>
        </Left>
            <Center>
                <Title>
                    Useful Links
                </Title>
                <List>

                <ListItem >Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Term</ListItem>
                </List>
                
            </Center>
            <Right>
                <Title>Contact</Title>
                <Contactitem><Room style={{marginRight:"10px"}}/> 622 Dixie Path ,  South Tobinchester 98336</Contactitem>
                <Contactitem><Phone  style={{marginRight:"10px"}}/>  +1 234 56 78</Contactitem>
                <Contactitem><MailOutline  style={{marginRight:"10px"}}/>  contact@lama.dev</Contactitem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
    </Container>
  )
}

export default Footer

const Container = styled.div`
display: flex;

${mobile({flexDirection:'column',  })}
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
${mobile({paddingBottom:'0px 0px 20px',  })}
`
const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display:'none'})}
`
const Right = styled.div`
flex: 1;
padding: 20px 20px 20px 0px;
${mobile({padding: '0px 0px 20px 20px ',  })}

`
const Logo = styled.h1`
`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`

const Socialicon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props=>props.color};
`

const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0%;
padding: 0%;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 20px;
`
const Contactitem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;

`

const Payment = styled.img`

`
