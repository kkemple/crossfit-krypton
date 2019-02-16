import React from 'react'
import styled from '@emotion/styled'
import { StaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { ContentContainer } from './index'

const query = graphql`
  query {
    allSponsorsJson {
      edges {
        node {
          id
          link
        }
      }
    }
    allFile(filter: { name: { regex: "/-logo$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
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
`

const SponsorImg = styled(Img)`
  width: 150px;
`

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <Container>
        <Sponsors>
          {data.allSponsorsJson.edges.map(({ node }) => {
            const { node: sponsorImage } = data.allFile.edges.find(
              ({ node: image }) =>
                image.name.toLowerCase().includes(node.id.toLowerCase())
            )
            return (
              <Link key={node.id} to={node.link}>
                <SponsorImg
                  alt={node.name}
                  fluid={sponsorImage.childImageSharp.fluid}
                />
              </Link>
            )
          })}
        </Sponsors>
        <Copyright>{`© Copyright ${new Date().getFullYear()} CrossFit Krypton`}</Copyright>
      </Container>
    )}
  />
)
