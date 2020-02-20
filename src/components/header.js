import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { MdOpenInNew } from 'react-icons/md'

import Logo from '../components/logo'
import ContentContainer from '../components/content-container'

// ck red #cd3c33

const navItemCss = css`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  margin-left: 20px;

  :active {
    color: #cd3c33;
  }

  @media (max-width: 1000px) {
    font-size: 14px;
  }

  @media (max-width: 780px) {
    font-size: 12px;
  }
`

const activeStyles = {
  color: `#cd3c33`,
}

const Container = styled(`div`)`
  background-color: #ffffff;
  padding: 0 16px;
  border-bottom: 1px solid #eeeeee;
  position: fixed;
  z-index: 999;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  align-items: center;

  @media (max-width: 1000px) {
    height: auto;
  }
`

const FlexContainer = styled(`div`)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
    height: 100%;
  }
`

const LogoContainer = styled(`div`)`
  width: 100px;
  height: 60px;

  @media (max-width: 1000px) {
    width: 50px;
    height: 30px;
  }
`

const Nav = styled(`nav`)`
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const NavItem = styled(Link)`
  ${navItemCss}
`

const ExternalNavItem = styled(`a`)`
  ${navItemCss}
`

const Header = ({ siteTitle, showDropShadow }) => (
  <Container
    css={showDropShadow ? { boxShadow: `0 3px 9px rgba(0, 0, 0, 0.1)` } : {}}
  >
    <ContentContainer
      css={css`
        @media (max-width: 780px) {
          height: 100%;
        }
      `}
    >
      <FlexContainer>
        <LogoContainer>
          <Link to="/">
            <Logo alt={siteTitle} />
          </Link>
        </LogoContainer>
        <Nav>
          <NavItem activeStyle={activeStyles} to="/">
            Home
          </NavItem>
          <NavItem activeStyle={activeStyles} to="/about">
            About
          </NavItem>
          <NavItem activeStyle={activeStyles} to="/memberships">
            Memberships
          </NavItem>
          <NavItem activeStyle={activeStyles} to="/online-programming">
            Online Programming
          </NavItem>
          <NavItem activeStyle={activeStyles} to="/training-camp">
            Training Camp
          </NavItem>
          <ExternalNavItem
            target="_blank"
            href="https://cfkrypton.myshopify.com"
          >
            Store <MdOpenInNew />
          </ExternalNavItem>
        </Nav>
      </FlexContainer>
    </ContentContainer>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
