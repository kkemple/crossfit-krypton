import React from 'react'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ContentContainer from './content-container'

const query = graphql`
  query Sponsors {
    allContentfulSponsors {
      edges {
        node {
          name
          logo {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          link
          id
        }
      }
    }
  }
`

const Container = styled(ContentContainer)`
  width: 100%;
  padding: 32px;
  background-color: #eeeeee;
  border-top: 1px solid #bbbbbb;
`

const Copyright = styled(`span`)`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin: auto;
  display: block;
  width: 100%;
`

const Sponsors = styled(`div`)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 0;
  width: 100%;
  margin-bottom: 32px;
  flex-wrap: wrap;
`

const SponsorImg = styled(Img)`
  width: 150px;
`

const Newsletter = styled(`p`)`
  font-weight: bold;
  font-size: 20px;
  text-align: center;

  a {
    color: #cd3c33;
  }
`

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <Container>
        <Newsletter>
          Sign up for the{' '}
          <a href="http://eepurl.com/gw9TcP">Krypton newsletter</a>!
        </Newsletter>
        <Sponsors>
          {data.allContentfulSponsors.edges.map(({ node }) => {
            return (
              <a key={node.id} href={node.link}>
                <SponsorImg alt={node.name} fluid={node.logo.fluid} />
              </a>
            )
          })}
        </Sponsors>
        <Copyright>{`© Copyright ${new Date().getFullYear()} CrossFit Krypton`}</Copyright>
      </Container>
    )}
  />
)
