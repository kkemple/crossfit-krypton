import React from 'react'
import styled from '@emotion/styled'

import {
  ContentContainer,
  SectionContent,
  SectionSpacer,
  SectionTitle,
  Layout,
} from '../components'

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

const OnlineProgrammingPage = () => (
  <Layout>
    <ContentContainer>
      <Section>
        <SectionSpacer />
        <TitleWithMargin>Ben Smith Blueprint</TitleWithMargin>
        <SectionContent>
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
        </SectionContent>
        <Button target="_blank" href="https://www.bensmithblueprint.com/">
          Learn More
        </Button>
      </Section>
      )
    </ContentContainer>
  </Layout>
)

export default OnlineProgrammingPage
