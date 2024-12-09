import styled from 'styled-components'

const Announcement = () => {
  return (
    <div>
        <Container>
            Super Deal! Free Shipping on Order Over $50
        </Container>
    </div>
  )
}


export default Announcement


const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;



`