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

const ProgramsPage = ({ data }) => (
  <Layout>
    <ContentContainer>
      {data.allProgramsJson.edges.map(({ node }) => {
        return (
          <div key={node.id}>
            <SectionSpacer />
            <SectionTitle>{node.title}</SectionTitle>
            <SectionSubTitle>{node.rate}</SectionSubTitle>
            <SectionContent>{node.notes}</SectionContent>
            <SectionDivider />
          </div>
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
        }
      }
    }
  }
`
