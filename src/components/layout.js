import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'

import Header from './header'
import Footer from './footer'
import globalStyles from './layout.css'

const Page = styled(`div`)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  min-height: 100vh;
  background-color: white;
  max-width: 100%;
`

const Content = styled(`div`)`
  flex: 1;
  padding-top: 90px;
  padding-bottom: 64px;
`

class Layout extends Component {
  state = { pageIsScrolled: false }

  handleScroll = () => {
    if (window.scrollY !== 0 && !this.state.pageIsScrolled) {
      this.setState(state => ({ ...state, pageIsScrolled: true }))
    } else if (window.scrollY === 0) {
      this.setState(state => ({ ...state, pageIsScrolled: false }))
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render = () => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Global styles={globalStyles} />
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Page>
            <Header
              showDropShadow={this.state.pageIsScrolled}
              siteTitle={data.site.siteMetadata.title}
            />
            <Content>{this.props.children}</Content>
            <Footer />
          </Page>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
