import React from 'react'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import Carousel from 'nuka-carousel'

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
  color: #000000;
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
          Join us for CrossFit Krypton’s next training camp, January 18th -
          19th.
        </SectionTitle>
        <SectionSubTitle style={{ fontSize: '20px', marginTop: '48px' }}>
          Learn, be coached, train hard, and hangout for two days with Ben
          Smith, Adam Klink, and some of the other Krypton team! We will talk
          programming, skill building, goal setting, recovery, nutrition, and
          anything else you want to discuss! We are located at our{' '}
          <ExternalLink href="https://goo.gl/maps/CKt6JSUqNK9rR8Qj6">
            new facility in Chesapeake, Virginia
          </ExternalLink>
          .
        </SectionSubTitle>
        <Carousel
          style={{
            height: '200px',
            marginTop: '64px',
            fontWeight: 'bold',
            fontSize: '20px',
            fontStyle: 'italic',
            color: '#aaaaaa',
            padding: '24px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '800px',
          }}
          autoplayInterval={5000}
          withoutControls
          autoplay
          wrapAround
        >
          <div>
            <p>
              This camp went beyond my expectations. It’s one thing to put in
              the training time and effort, but being able to get knowledge and
              feedback from some of the best in the world is priceless. You will
              come out of this camp a better athlete guaranteed. I know I did.
              Ben and his family are some of the nicest people you will meet.
              Great gym, awesome coaches, and just a great time overall. Highly
              recommend
            </p>
          </div>
          <div>
            <p>
              This was an amazing experience where I learned lots of tips from
              Ben and Adam and had a lot of fun working out a lot! Great
              atmosphere, amazing gym. All around great experience and will be
              coming back!
            </p>
          </div>
          <div>
            <p>
              The weekend working out and talking with the Krypton athletes was
              an extremely valuable training lesson, and they made it just plain
              fun. The athletes attending were at all different levels but were
              all challenged to do their best and learn from the world-class
              coaches and athletes at Krypton. I'd do it again in a heartbeat.
            </p>
          </div>
          <div>
            <p>
              Great time! Really welcoming group and fun atmosphere. Would
              definitely recommend!
            </p>
          </div>
        </Carousel>
        <Button href="https://crossfitkrypton.sites.zenplanner.com/event.cfm?eventId=E20A3216-A8E1-420C-B2CF-3CCF474BC87A">
          Sign Up Now
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
