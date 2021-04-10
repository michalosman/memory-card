import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Memory card</Title>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
`

const Title = styled.h1`
  font-weight: 800;
  text-align: center;
`

export default Header
