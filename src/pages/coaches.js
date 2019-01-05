import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import {
  ContentContainer,
  SectionContent,
  SectionSpacer,
  SectionSubTitle,
  SectionTitle,
  Layout,
} from '../components'

const Coaches = styled(`div`)`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-top: 32px;
`

const CoachTitle = styled(`h5`)`
  color: #cd3c33;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  margin-top: 32px;
  margin-bottom: 0;
`

const CoachDescription = styled(`span`)`
  display: block;
  margin-top: 8px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  width: 200px;
  font-size: 12px;
`

const CoachImg = styled(Img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #cd3c33;
  margin: 0 32px;
`

const SecondPage = ({ data }) => (
  <Layout>
    <SectionSpacer />
    <ContentContainer>
      <SectionTitle>Meet the Coaches</SectionTitle>
      <SectionSubTitle>
        INCLUDING THE 2015 CROSSFIT GAMES CHAMPION BEN SMITH
      </SectionSubTitle>
      <SectionSpacer />
      <SectionContent>
        <Coaches>
          {data.allCoachesJson.edges.map(({ node }) => {
            const { node: coachImage } = data.allFile.edges.find(
              ({ node: image }) =>
                image.name.toLowerCase().includes(node.id.toLowerCase())
            )
            return (
              <div key={node.name}>
                <Link to={`/coaches/${node.id}`}>
                  <CoachImg
                    alt={node.name}
                    fluid={coachImage.childImageSharp.fluid}
                  />
                </Link>
                <CoachTitle>{node.name}</CoachTitle>
                <CoachDescription>{node.short}</CoachDescription>
              </div>
            )
          })}
        </Coaches>
      </SectionContent>
    </ContentContainer>
  </Layout>
)

export default SecondPage

export const query = graphql`
  query {
    allCoachesJson {
      edges {
        node {
          id
          name
          bio
          short
        }
      }
    }
    allFile(filter: { name: { regex: "/-coach$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
