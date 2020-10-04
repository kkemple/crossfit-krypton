import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import { ContentContainer } from '../components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const CoachImg = styled(Img)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #cd3c33;

  @media (max-width: 780px) {
    width: 200px;
    height: 200px;
    margin-bottom: 24px;
  }
`

const Coach = styled(`div`)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`

const CoachInfo = styled(`div`)`
  flex: 1;
  margin-left: 32px;
  padding-left: 32px;
  border-left: 1px solid #cd3c33;
  padding-top: 16px;

  @media (max-width: 780px) {
    margin-left: 0;
  }
`

const CoachCertifications = styled(`ul`)`
  margin-left: 0;
  padding-left: 0;
  list-style: none;
`

const Certification = styled(`li`)`
  color: #cd3c33;
  font-size: 14px;
  margin-bottom: 0;
`

const Bio = styled(`p`)`
  font-size: 14px;
`

const Container = styled(`div`)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
  min-height: 450px;

  @media (max-width: 780px) {
    min-height: 0;
    justify-content: flex-start;
    flex-direction: column;
    height: auto;
    margin-top: 75px;
  }
`

const CoachPage = ({ data: { contentfulCoach } }) => (
  <Layout>
    <Container>
      <ContentContainer>
        <Coach key={contentfulCoach.name}>
          <CoachImg
            alt={contentfulCoach.name}
            fluid={contentfulCoach.profilePicture.fluid}
          />
          <CoachInfo>
            <h2>{contentfulCoach.name}</h2>
            {!!contentfulCoach.certifications && (
              <CoachCertifications>
                {contentfulCoach.certifications.map(cert => (
                  <Certification>{cert}</Certification>
                ))}
              </CoachCertifications>
            )}
            <Bio>{documentToReactComponents(contentfulCoach.bio.json)}</Bio>
          </CoachInfo>
        </Coach>
      </ContentContainer>
    </Container>
  </Layout>
)

export default CoachPage

export const query = graphql`
  query CoachQuey($id: String) {
    contentfulCoach(id: { eq: $id }) {
      name
      certifications
      bio {
        json
      }
      profilePicture {
        fluid(maxWidth: 200) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
