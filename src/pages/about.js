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
      <SectionTitle>Meet the Coaches</SectionTitle>
      <SectionSubTitle>
        INCLUDING THE 2015 CROSSFIT GAMES CHAMPION BEN SMITH
      </SectionSubTitle>
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
      <SectionSpacer />
      <SectionTitle>Schedule</SectionTitle>
      <SectionSubTitle>
        Schedule subject to change, always reach out to us around holidays!
      </SectionSubTitle>
      <ScheduleLegend
        css={{
          maxWidth: '400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '24px',
        }}
      >
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <div
            css={{
              width: '12px',
              height: '12px',
              backgroundColor: '#cd3c33',
              marginRight: '4px',
              display: 'inline-block',
              borderRadius: '50%',
            }}
          />
          <span css={{ fontSize: '12px', textTransform: 'uppercase' }}>
            Class
          </span>
        </div>
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <div
            css={{
              width: '12px',
              height: '12px',
              backgroundColor: 'black',
              marginRight: '4px',
              display: 'inline-block',
              borderRadius: '50%',
            }}
          />
          <span css={{ fontSize: '12px', textTransform: 'uppercase' }}>
            Open Gym
          </span>
        </div>
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <div
            css={{
              width: '12px',
              height: '12px',
              backgroundColor: '#90caf9',
              marginRight: '4px',
              display: 'inline-block',
              borderRadius: '50%',
            }}
          />
          <span css={{ fontSize: '12px', textTransform: 'uppercase' }}>
            Fit
          </span>
        </div>
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <div
            css={{
              width: '12px',
              height: '12px',
              backgroundColor: '#a5d6a7',
              marginRight: '4px',
              display: 'inline-block',
              borderRadius: '50%',
            }}
          />
          <span css={{ fontSize: '12px', textTransform: 'uppercase' }}>
            Kids
          </span>
        </div>
      </ScheduleLegend>
      <ScheduleLabels>
        <ScheduleRow />
        <ScheduleRow>
          <ScheduleLabel>Monday</ScheduleLabel>
        </ScheduleRow>
        <ScheduleRow>
          <ScheduleLabel>Tuesday</ScheduleLabel>
        </ScheduleRow>
        <ScheduleRow>
          <ScheduleLabel>Wednesday</ScheduleLabel>
        </ScheduleRow>
        <ScheduleRow>
          <ScheduleLabel>Thursday</ScheduleLabel>
        </ScheduleRow>
        <ScheduleRow>
          <ScheduleLabel>Friday</ScheduleLabel>
        </ScheduleRow>
        <ScheduleRow>
          <ScheduleLabel>Saturday</ScheduleLabel>
        </ScheduleRow>
        <ScheduleRow>
          <ScheduleLabel>Sunday</ScheduleLabel>
        </ScheduleRow>
      </ScheduleLabels>
      <ScheduleLabelsMobile>Mon - Sun</ScheduleLabelsMobile>
      <Schedule>
        <ScheduleRow css={{ borderRight: '1px solid #eeeeee' }}>
          <ScheduleTime>5:00am</ScheduleTime>
          <ScheduleTime>6:00am</ScheduleTime>
          <ScheduleTime>7:00am</ScheduleTime>
          <ScheduleTime>8:00am</ScheduleTime>
          <ScheduleTime>9:00am</ScheduleTime>
          <ScheduleTime>10:00am</ScheduleTime>
          <ScheduleTime>11:00am</ScheduleTime>
          <ScheduleTime>12:00pm</ScheduleTime>
          <ScheduleTime>1:00pm</ScheduleTime>
          <ScheduleTime>2:00pm</ScheduleTime>
          <ScheduleTime>3:00pm</ScheduleTime>
          <ScheduleTime>4:00pm</ScheduleTime>
          <ScheduleTime>5:00pm</ScheduleTime>
          <ScheduleTime>6:00pm</ScheduleTime>
          <ScheduleTime css={{ borderBottom: 'none' }}>7:00pm</ScheduleTime>
        </ScheduleRow>
        <ScheduleRow>
          <Class />
          <Class />
          <Class />
          <Group>
            <Class css={{ flex: 1 }} />
            <Fit css={{ flex: 1, height: '17px' }} />
          </Group>
          <Class />
          <Empty />
          <Empty />
          <Empty />
          <Fit css={{ flex: 1, maxHeight: '17px' }} />
          <OpenGym css={{ flex: 1 }} />
          <Class />
          <Group>
            <Class css={{ flex: 1 }} />
            <Kids css={{ flex: 1, marginTop: '8px', height: '26px' }} />
          </Group>
          <Class />
          <Class />
          <Class />
        </ScheduleRow>
        <ScheduleRow>
          <Class />
          <Class />
          <Class />
          <Group>
            <Class css={{ flex: 1 }} />
            <Fit css={{ flex: 1, height: '17px' }} />
          </Group>
          <Class />
          <Empty />
          <Empty />
          <Empty />
          <Fit css={{ flex: 1, maxHeight: '17px' }} />
          <OpenGym css={{ flex: 1 }} />
          <Class />
          <Group>
            <Class css={{ flex: 1 }} />
            <Kids css={{ flex: 1, marginTop: '8px', height: '26px' }} />
          </Group>
          <Class />
          <Class />
          <Class />
        </ScheduleRow>
        <ScheduleRow>
          <Class />
          <Class />
          <Class />
          <Group>
            <Class css={{ flex: 1 }} />
            <Fit css={{ flex: 1, height: '17px' }} />
          </Group>
          <Class />
          <Empty />
          <Empty />
          <Empty />
          <Fit css={{ flex: 1, maxHeight: '17px' }} />
          <OpenGym css={{ flex: 1 }} />
          <Class />
          <Group>
            <Class css={{ flex: 1 }} />
            <Kids css={{ flex: 1, marginTop: '8px', height: '26px' }} />
          </Group>
          <Class />
          <Class />
          <Class />
        </ScheduleRow>
        <ScheduleRow>
          <Class />
          <Class />
          <Class />
          <Group>
            <Class css={{ flex: 1 }} />
            <Fit css={{ flex: 1, height: '17px' }} />
          </Group>
          <Class />
          <Empty />
          <Empty />
          <Empty />
          <Fit css={{ flex: 1, maxHeight: '17px' }} />
          <OpenGym css={{ flex: 1 }} />
          <Class />
          <Group>
            <Class css={{ flex: 1 }} />
            <Kids css={{ flex: 1, marginTop: '8px', height: '26px' }} />
          </Group>
          <Class />
          <Class />
          <Class />
        </ScheduleRow>
        <ScheduleRow>
          <Class />
          <Class />
          <Class />
          <Group>
            <Class css={{ flex: 1 }} />
            <Fit css={{ flex: 1, height: '17px' }} />
          </Group>
          <Class />
          <Empty />
          <Empty />
          <Empty />
          <Fit css={{ flex: 1, maxHeight: '17px' }} />
          <OpenGym css={{ flex: 1 }} />
          <Class />
          <Group>
            <Class css={{ flex: 1 }} />
            <Kids css={{ flex: 1, marginTop: '8px', height: '26px' }} />
          </Group>
          <Class />
          <Class />
          <Empty />
        </ScheduleRow>
        <ScheduleRow>
          <Empty />
          <Empty />
          <Empty />
          <Empty css={{ height: '17px' }} />
          <Fit css={{ height: '17px' }} />
          <Class />
          <OpenGym />
          <OpenGym />
          <Empty />
          <Empty />
          <Empty />
          <Empty />
          <Empty />
          <Empty />
          <Empty />
          <Empty />
        </ScheduleRow>
        <ScheduleRow>
          <Empty />
          <Empty />
          <Empty />
          <Empty />
          <Empty />
          <Empty />
          <Empty />
          <OpenGym />
          <OpenGym />
          <OpenGym />
          <Empty />
          <Empty />
          <Empty />
          <Empty />
          <Empty />
        </ScheduleRow>
      </Schedule>
      <SectionSpacer />
      <SectionTitle>Get In Touch</SectionTitle>
      <SectionSubTitle>We'd love to hear from you!</SectionSubTitle>
      <div style={{ height: '32px' }} />
      <ContactForm />
    </ContentContainer>
  </Layout>
)

export default AboutPage

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
