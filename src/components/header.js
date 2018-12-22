import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'

import Logo from '../components/logo'
import ContentContainer from '../components/content-container'

// ck red #cd3c33

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
  height: 64px;
  align-items: center;
`

const FlexContainer = styled(`div`)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoContainer = styled(`div`)`
  width: 70px;
  height: 40px;
`

const Nav = styled(`nav`)`
  display: flex;
  align-items: center;
`

const NavItem = styled(Link)`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  margin-left: 10px;

  :active {
    color: #cd3c33;
  }
`

const Header = ({ siteTitle, showDropShadow }) => (
  <Container
    css={showDropShadow ? { boxShadow: `0 3px 9px rgba(0, 0, 0, 0.1)` } : {}}
  >
    <ContentContainer>
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
          <NavItem activeStyle={activeStyles} to="/programs">
            Programs
          </NavItem>
          <NavItem activeStyle={activeStyles} to="/coaches">
            Coaches
          </NavItem>
          <NavItem activeStyle={activeStyles} to="/schedule">
            Schedule
          </NavItem>
          <NavItem activeStyle={activeStyles} to="/store">
            Store
          </NavItem>
          <NavItem activeStyle={activeStyles} to="/contact-us">
            Contact Us
          </NavItem>
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
