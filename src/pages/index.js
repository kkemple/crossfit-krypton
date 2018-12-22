import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import {
  ContentContainer,
  SectionContent,
  SectionSpacer,
  SectionSubTitle,
  SectionTitle,
} from '../components'

const HeroContainer = styled('div')`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
`

const HeroImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const HeroImageOverlay = styled(`div`)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
`

const GetStartedContainer = styled(`div`)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

const GetStartedCallout = styled(`div`)`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 48px 24px;
  width: 50%;
`

const GetStartedButton = styled(Link)`
  padding: 12px 18px;
  background-color: #cd3c33;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
`

const GetStartedTitle = styled(`h2`)`
  color: #cd3c33;
  margin-bottom: 10px;
`

const Embed = styled(`iframe`)`
  margin-left: auto;
  margin-right: auto;
  display: block;
  outline: none;
  border: none;
`

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

const BtwbImageContainer = styled(`div`)`
  max-width: 800px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

const IndexPage = ({ data }) => (
  <Layout>
    <HeroContainer>
      <HeroImage
        alt={'Ben Smith snatches 225 pounds.'}
        fluid={data.heroImage.childImageSharp.fluid}
      />
      <HeroImageOverlay />
      <GetStartedContainer>
        <ContentContainer>
          <GetStartedCallout>
            <GetStartedTitle>The First Step To Getting Started</GetStartedTitle>
            <p>
              <b>CrossFit</b> is more than just an effective way to workout and
              get in shape. It is a way of living life to be your best.
            </p>
            <h3>Are you ready to be your best?</h3>
            <GetStartedButton to="/contact-us">Get Started</GetStartedButton>
          </GetStartedCallout>
        </ContentContainer>
      </GetStartedContainer>
    </HeroContainer>
    <SectionSpacer />
    <ContentContainer>
      <SectionTitle>Welcome to CrossFit Krypton</SectionTitle>
      <SectionSubTitle>
        We're different from your ordinary gym and gym membership
      </SectionSubTitle>
      <SectionContent>
        When you come to our gym, the only thing we expect from you is a
        willingness to learn and challenge yourself, as well as a motivation and
        desire to better yourself each day. During each group class, we will
        provide personal instruction, coaching, programming (exercises, reps,
        time domains, etc.) and nutritional advice (if requested). We are
        committed to helping every member of our gym to reach their goals, and
        if you commit to bringing your best effort and attitude each day, I can
        guarantee that you will exceed any realistic fitness expectations you
        have.
      </SectionContent>
      <SectionSpacer />
      <SectionTitle>See What CrossFit Krypton Is All About</SectionTitle>
      <SectionSubTitle>
        Check out this video to learn more about CrossFit Krypton
      </SectionSubTitle>
      <Embed
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BIw2bx0n1o0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <SectionSpacer />
      <SectionTitle>Meet the Coaches</SectionTitle>
      <SectionSubTitle>
        Including the 2015 CrossFit Games Champion Ben Smith
      </SectionSubTitle>
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
      <SectionSpacer />
      <SectionTitle>Beyond the Whiteboard</SectionTitle>
      <SectionSubTitle>
        All Krypton members are given access to Beyond the White Board (BTWB)
      </SectionSubTitle>
      <SectionContent>
        With BTWB members can see the next day's WOD and they can manage
        everything online (BTW provides an excellent selection of workouts, as
        well as all Krypton workouts). As well as manage your lifestyle and diet
        goals along with CrossFit and easily track your progress over time.
      </SectionContent>
      <BtwbImageContainer>
        <a
          href="https://beyondthewhiteboard.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img
            alt={'Beyond the Whiteboard screenshot.'}
            fluid={data.btwb.childImageSharp.fluid}
          />
        </a>
      </BtwbImageContainer>
      <SectionSpacer />
      <SectionTitle>New to CrossFit?</SectionTitle>
      <SectionSubTitle>See what it's all about.</SectionSubTitle>
      <Embed
        width="560"
        height="315"
        src="https://www.youtube.com/embed/mlVrkiCoKkg"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </ContentContainer>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "crossfit-krypton-group-photo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    btwb: file(relativePath: { eq: "beyond-the-whiteboard.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
