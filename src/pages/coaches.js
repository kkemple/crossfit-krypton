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

const CoachesPage = ({ data }) => (
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
          {data.allContentfulCoach.edges.map(({ node }) => {
            return (
              <Coach key={node.name}>
                <Link to={`/coaches/${node.slug}`}>
                  <CoachImg alt={node.name} fluid={node.profilePicture.fluid} />
                </Link>
                <CoachTitle>{node.name}</CoachTitle>
                <CoachDescription>{node.shortDescription}</CoachDescription>
              </Coach>
            )
          })}
        </Coaches>
      </Section>
    </ContentContainer>
  </Layout>
)

export default CoachesPage

export const query = graphql`
  query Coaches {
    allContentfulCoach(sort: { fields: [createdAt] }) {
      edges {
        node {
          name
          slug
          certifications
          shortDescription
          profilePicture {
            fluid(maxWidth: 200) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
