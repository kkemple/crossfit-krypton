import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import {
  ContentContainer,
  SectionContent,
  SectionSpacer,
  SectionSubTitle,
  SectionTitle,
  Layout,
} from '../components'

const SectionDivider = styled(`div`)`
  height: 2px;
  margin-top: 64px;
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

const ProgramsPage = ({ data }) => (
  <Layout>
    <ContentContainer>
      {data.allProgramsJson.edges.map(({ node }) => {
        return (
          <Section key={node.id}>
            <SectionSpacer />
            <SectionTitle>{node.title}</SectionTitle>
            <SectionSubTitle>{node.rate}</SectionSubTitle>
            <SectionContent>{node.notes}</SectionContent>
            {node.action && (
              <Button target="_blank" href={node.action.payload.href}>
                {node.action.payload.text}
              </Button>
            )}
            <SectionDivider />
          </Section>
        )
      })}
    </ContentContainer>
  </Layout>
)

export default ProgramsPage

export const query = graphql`
  query {
    allProgramsJson {
      edges {
        node {
          id
          title
          rate
          notes
          action {
            payload {
              href
              text
            }
          }
        }
      }
    }
  }
`
