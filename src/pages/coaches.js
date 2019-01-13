import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'

import {
  ContentContainer,
  SectionContent,
  SectionSpacer,
  SectionSubTitle,
  SectionTitle,
  Layout,
  Coaches,
  Coach,
  CoachTitle,
  CoachDescription,
  CoachImg,
} from '../components'

const Section = styled(SectionContent)`
  max-width: 1200px;
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
      <Section>
        <Coaches>
          {data.allCoachesJson.edges.map(({ node }) => {
            const { node: coachImage } = data.allFile.edges.find(
              ({ node: image }) =>
                image.name.toLowerCase().includes(node.id.toLowerCase())
            )
            return (
              <Coach key={node.name}>
                <Link to={`/coaches/${node.id}`}>
                  <CoachImg
                    alt={node.name}
                    fluid={coachImage.childImageSharp.fluid}
                  />
                </Link>
                <CoachTitle>{node.name}</CoachTitle>
                <CoachDescription>{node.short}</CoachDescription>
              </Coach>
            )
          })}
        </Coaches>
      </Section>
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
