import React, { useState, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Carousel from 'nuka-carousel'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

import {
  ContentContainer,
  SectionContent,
  SectionSpacer,
  SectionSubTitle,
  SectionTitle,
  Layout,
} from '../components'

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
`

const HeroImageOverlay = styled(`div`)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
`

const GetStartedButton = styled(Link)`
  padding: 12px 24px;
  background-color: #cd3c33;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 3px;
  display: block;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
`

const NewsLetterButton = styled(`a`)`
  padding: 12px 24px;
  background-color: #cd3c33;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 3px;
  display: block;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  text-align: center;
`

const CloseDialogButton = styled('button')`
  outline: none;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`

const Embed = styled(`iframe`)`
  margin-left: auto;
  margin-right: auto;
  display: block;
  outline: none;
  border: none;
  max-width: 100%;
`

const BtwbImageContainer = styled(`div`)`
  max-width: 800px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

const StyledDialog = styled(DialogOverlay)`
  z-index: 999;
`

const IndexPage = ({ data }) => {
  const [showNewsletterDialog, setShowNewsletterDialog] = useState(false)

  useEffect(() => {
    const hasSeenDialog = localStorage.getItem(
      'krypton_has_seen_newsletter_dialog'
    )

    if (!hasSeenDialog) {
      const timer = setTimeout(() => {
        setShowNewsletterDialog(true)
      }, 3000)

      localStorage.setItem('krypton_has_seen_newsletter_dialog', true)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
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
                <HeroImage
                  key={image.name}
                  fluid={image.childImageSharp.fluid}
                />
              )
            })}
          </Carousel>
        </HeroImageContainer>
        <HeroImageOverlay />
      </HeroContainer>
      <SectionSpacer />
      <ContentContainer>
        <SectionTitle>Welcome to CrossFit Krypton</SectionTitle>
        <SectionSubTitle>
          We're different from your ordinary gym and gym membership
        </SectionSubTitle>
        <SectionContent>
          When you come to our gym, the only thing we expect from you is a
          willingness to learn and challenge yourself, as well as a motivation
          and desire to better yourself each day. During each group class, we
          will provide personal instruction, coaching, programming (exercises,
          reps, time domains, etc.) and nutritional advice (if requested). We
          are committed to helping every member of our gym to reach their goals,
          and if you commit to bringing your best effort and attitude each day,
          I can guarantee that you will exceed any realistic fitness
          expectations you have.
          <GetStartedButton to="/contact-us">Get Started</GetStartedButton>
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
        <SectionTitle>Beyond the Whiteboard</SectionTitle>
        <SectionSubTitle>
          All Krypton members are given access to Beyond the White Board (BTWB)
        </SectionSubTitle>
        <SectionContent>
          With BTWB members can see the next day's WOD and they can manage
          everything online (BTW provides an excellent selection of workouts, as
          well as all Krypton workouts). As well as manage your lifestyle and
          diet goals along with CrossFit and easily track your progress over
          time.
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
      {showNewsletterDialog && (
        <StyledDialog>
          <DialogContent
            style={{ position: 'relative', borderRadius: '4px', width: '70vw' }}
          >
            <CloseDialogButton onClick={() => setShowNewsletterDialog(false)}>
              X
            </CloseDialogButton>
            <SectionTitle>Don't Miss Out!</SectionTitle>
            <SectionSubTitle>
              Sign up for the Krypton newsletter to stay in the know about
              everything from training camps to class times!
            </SectionSubTitle>
            <NewsLetterButton href="http://eepurl.com/gw9TcP">
              Sign Up Now
            </NewsLetterButton>
          </DialogContent>
        </StyledDialog>
      )}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    btwb: file(relativePath: { eq: "beyond-the-whiteboard.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allCoachesJson(limit: 3) {
      edges {
        node {
          id
          name
          bio
          short
        }
      }
    }
    coachImages: allFile(filter: { name: { regex: "/-coach$/" } }) {
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
    sliderImages: allFile(filter: { name: { regex: "/^slide-show-/" } }) {
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
