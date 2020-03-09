import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
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

const HeroContainer = styled('div')`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;

  @media (max-width: 750px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`

const HeroImageContainer = styled(`div`)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
`

const HeroImage = styled(Img)`
  width: 100%;
  height: 500px;
  max-width: 2000px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 750px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }

  img {
    object-position: center -100px !important;
  }
`

const HeroImageOverlay = styled(`div`)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
`

const TrainingCamp = ({ data }) => (
  <Layout>
    <HeroContainer>
      <HeroImageContainer>
        <Carousel
          withoutControls
          autoplay
          wrapAround
          speed={600}
          autoplayInterval={5000}
          transitionMode="fade"
        >
          {data.sliderImages.edges.map(({ node: image }) => {
            return (
              <HeroImage key={image.name} fluid={image.childImageSharp.fluid} />
            )
          })}
        </Carousel>
      </HeroImageContainer>
      <HeroImageOverlay />
    </HeroContainer>
    <ContentContainer>
      <Section style={{ marginTop: '48px' }}>
        <SectionTitle>Krypton Training Camp V.3</SectionTitle>
        <SectionSubTitle style={{ fontSize: '20px' }}>
          Stay Tuned for Dates!
        </SectionSubTitle>
        <Carousel
          style={{
            height: '200px',
            marginTop: '48px',
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
        {/* <Button href="https://crossfitkrypton.sites.zenplanner.com/event.cfm?eventId=89CE9413-57ED-4174-AEF4-FACC27FF397C">
          Sign Up Now
        </Button> */}
        <p style={{ marginTop: '48px' }}>
          Learn, be coached, train hard, and hangout for two days with Ben
          Smith, Adam Klink, and some of the other Krypton team! We will talk
          programming, skill building, goal setting, recovery, nutrition, and
          anything else you want to discuss! We are located at our{' '}
          <ExternalLink href="https://goo.gl/maps/CKt6JSUqNK9rR8Qj6">
            new facility in Chesapeake, Virginia
          </ExternalLink>
          .
        </p>
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
    sliderImages: allFile(
      filter: { name: { regex: "/^training-camp-slide-show-/" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
