import React from 'react'

import {
  ContentContainer,
  SectionSpacer,
  SectionSubTitle,
  SectionTitle,
  ContactForm,
  Layout,
} from '../components'

const ContactUsPage = () => (
  <Layout>
    <ContentContainer>
      <SectionSpacer />
      <SectionTitle>Get In Touch</SectionTitle>
      <SectionSubTitle>We'd love to hear from you!</SectionSubTitle>
      <SectionSpacer />
      <ContactForm />
    </ContentContainer>
  </Layout>
)

export default ContactUsPage
