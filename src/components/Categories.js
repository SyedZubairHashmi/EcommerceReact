import React from 'react'
import  Styled, { styled }  from 'styled-components'
import { categories} from '../data'
import CategoryItem from '../components/CategoryItem'
import {mobile} from '../responsive'

const Categories = () => {
  return (
    <Container>
      {
        categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))
      }
    </Container>
  )
}

export default Categories

const Container =styled.div`
display: flex;
padding: 20px;
justify-content: space-between;

${mobile({padding: '0px', flexDirection:'column'})}
`
