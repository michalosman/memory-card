import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="logo"></Logo>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
`

const Logo = styled.img`
  max-width: 600px;
`

export default Header
