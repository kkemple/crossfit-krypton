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
  ContactForm,
} from '../components'

const Section = styled(SectionContent)`
  max-width: 1200px;
`

const SectionDivider = styled(`div`)`
  height: 2px;
  margin-top: 64px;
  background-color: #cd3c33;
  width: 300px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`

const ScheduleLabels = styled(`div`)`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border: 1px solid #eeeeee;

  @media (max-width: 780px) {
    display: none;
  }
`

const ScheduleLabelsMobile = styled(`span`)`
  display: none;
  border: 1px solid #eeeeee;
  text-align: center;
  width: 100%;
  font-size: 12px;
  color: #888888;

  @media (max-width: 780px) {
    display: inline-block;
  }
`

const ScheduleLabel = styled(`span`)`
  font-size: 12px;
  color: #888888;
  text-align: center;
`

const Schedule = styled(`div`)`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  min-height: 500px;
  border: 1px solid #eeeeee;
`

const ScheduleRow = styled(`div`)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  flex: 1;
`

const Class = styled(`div`)`
  height: 34px;
  background-color: #cd3c33;
  border: 1px solid #eeeeee;
`

const Fit = styled(`div`)`
  background-color: #90caf9;
  height: 34px;
  border: 1px solid #eeeeee;
`

const Athletics = styled(`div`)`
  background-color: #9b59b6;
  height: 34px;
  border: 1px solid #eeeeee;
`

const OpenGym = styled(`div`)`
  background-color: black;
  height: 34px;
  border: 1px solid #eeeeee;
`

const Kids = styled(`div`)`
  background-color: #a5d6a7;
  height: 34px;
  border: 1px solid #eeeeee;
`

const Empty = styled(`div`)`
  background-color: #ffffff;
  height: 34px;
  border: 1px solid #eeeeee;
`

const ScheduleTime = styled(`span`)`
  border-bottom: 1px solid #eeeeee;
  display: block;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  color: #888888;
  font-size: 12px;

  @media (max-width: 780px) {
    font-size: 8px;
  }
`

const Group = styled(`div`)`
  background-color: #ffffff;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`

const ScheduleLegend = styled(`div`)`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 780px) {
    flex-wrap: wrap;
  }
`

const AboutPage = ({ data }) => (
  <Layout>
    <SectionSpacer />
    <ContentContainer>
      <SectionTitle id="coaches">Meet the Coaches</SectionTitle>
      <SectionSubTitle>
        INCLUDING THE 2015 CROSSFIT GAMES CHAMPION BEN SMITH
      </SectionSubTitle>
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
      <SectionDivider />
      <SectionSpacer />

      <ContentContainer style={{ display: 'grid', alignContent: 'center' }}>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=Y185OWgzNWFuaWRsOWNvNWw0ZDJpZWVqaDNiMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%234285F4&amp;mode=WEEK&amp;showNav=1&amp;showDate=1&amp;showTabs=0&amp;showCalendars=0"
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </ContentContainer>
      <SectionSubTitle>
        Schedule subject to change, always reach out to us around holidays!
      </SectionSubTitle>
      <SectionDivider />
      <SectionSpacer />
      <SectionTitle id="contact">Get In Touch</SectionTitle>
      <SectionSubTitle>We'd love to hear from you!</SectionSubTitle>
      <div style={{ height: '32px' }} />
      <ContactForm />
    </ContentContainer>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query About {
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
