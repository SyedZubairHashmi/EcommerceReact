import { popularProducts } from "../data"
import Product from "./Product"
import styled from "styled-components"


const Products = () => {
  return (
    <Container>
       {popularProducts.map((item)=>(
        <Product item={item}/>
       ))}
    </Container>
  )
}

export default Products

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
