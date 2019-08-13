import React from 'react'
import styled from '@emotion/styled'
import { FaInstagram } from 'react-icons/fa'

import {
  ContentContainer,
  SectionContent,
  SectionSpacer,
  SectionTitle,
  Layout,
  Coaches,
  Coach,
  CoachImg,
} from '../components'

const SectionDivider = styled(`div`)`
  height: 2px;
  background-color: #cd3c33;
  width: 300px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`

const Button = styled(`a`)`
  padding: 8px 24px;
  background-color: #cd3c33;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 3px;
  margin-top: 16px;
  display: inline-block;
`

const Section = styled(`div`)`
  text-align: center;
`

const TitleWithMargin = styled(SectionTitle)`
  margin-bottom: 24px;
`

const InstaIcon = styled(FaInstagram)`
  font-size: 64px;
  margin-top: 24px;
`

const OnlineProgrammingPage = ({ data }) => (
  <Layout>
    <ContentContainer>
      <Section>
        <SectionSpacer />
        <SectionTitle>Ben Smith Blueprint</SectionTitle>
        {/* <SectionDivider /> */}
        <SectionContent css={{ marginTop: '24px', marginBottom: '24px' }}>
          Looking for an online program? The Blueprint is Ben Smith’s personal
          daily programming. Whether you are an aspiring CrossFit athlete, an
          everyday CrossFit athlete, workout from home, or an Affiliate looking
          to follow a proven programming structure designed to improve overall
          fitness (a balance between strength, gymnastics skills, olympic
          lifting, running, rowing, and other endurance work), we have the
          programming for you! Checkout more in the link below! Scaling options
          for each workout can also be provided upon request. * The daily
          workouts will be available on Beyond The Whiteboard and include a
          membership to BTWB.
          <br />
          <Button target="_blank" href="https://www.bensmithblueprint.com/">
            Learn More
          </Button>
        </SectionContent>
        <SectionDivider />
        <InstaIcon />
        <br />
        <b>@thebensmithblueprint</b>
        <Coaches>
          {data.allInstaNode.edges.map(({ node }) => {
            return (
              <Coach key={node.id}>
                <CoachImg
                  alt={node.original}
                  fluid={node.localFile.childImageSharp.fluid}
                />
              </Coach>
            )
          })}
        </Coaches>
      </Section>
    </ContentContainer>
  </Layout>
)

export default OnlineProgrammingPage

export const query = graphql`
  {
    allInstaNode(
      # filter: { mediaType: { regex: "/Image|Sidecar/" } }
      limit: 20
    ) {
      edges {
        node {
          id
          preview
          original
          mediaType
          localFile {
            childImageSharp {
              fluid {
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
`
