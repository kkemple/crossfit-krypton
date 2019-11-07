import React from 'react'
import styled from '@emotion/styled'
import Image from 'gatsby-image'

import {
  ContentContainer,
  SectionContent,
  SectionTitle,
  SectionSubTitle,
  Layout,
} from '../components'

const Section = styled(`div`)`
  text-align: center;
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

const ExternalLink = styled(`a`)`
  color: #cd3c33;
`

const TrainingCamp = ({ data }) => (
  <Layout>
    <Image
      css={{ marginBottom: '32px' }}
      fluid={data.trainingCampImg.childImageSharp.fluid}
    />
    <ContentContainer>
      <Section>
        <SectionTitle>
          Join us for CrossFit Krypton’s next training camp, in January 2020.
        </SectionTitle>
        <SectionSubTitle>
          Learn, be coached, train hard, and hangout for two days with Ben
          Smith, Adam Klink, and some of the other Krypton team!
        </SectionSubTitle>
        <SectionContent>
          We will talk programming, skill building, goal setting, recovery,
          nutrition, and anything else you want to discuss! We are located our{' '}
          <ExternalLink href="https://goo.gl/maps/CKt6JSUqNK9rR8Qj6">
            new facility in Chesapeake, Virginia
          </ExternalLink>
          .
        </SectionContent>
        <Button href="https://crossfitkrypton.sites.zenplanner.com/event.cfm?eventId=4A882120-69B9-4E59-AA3F-F33EF7B968D0">
          Learn More
        </Button>
      </Section>
    </ContentContainer>
  </Layout>
)

export default TrainingCamp

export const query = graphql`
  {
    trainingCampImg: file(
      relativePath: { regex: "/training-camp-billboard.png/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
