import styled from '@emotion/styled'
import Img from 'gatsby-image'

export { default as ContentContainer } from './content-container'
export { default as Header } from './header'
export { default as Footer } from './footer'
export { default as Layout } from './layout'
export { default as Logo } from './logo'
export { default as ContactForm } from './contact-form'

export const SectionSubTitle = styled(`h4`)`
  color: #cd3c33;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`

export const SectionTitle = styled(`h3`)`
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

export const SectionContent = styled(`div`)`
  text-align: center;
  padding: 0 16px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const SectionSpacer = styled(`div`)`
  width: 100%;
  padding: 32px 0;
`

export const Coaches = styled(`div`)`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-top: 32px;
  flex-wrap: wrap;
`

export const CoachTitle = styled(`h5`)`
  color: #cd3c33;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  margin-top: 32px;
  margin-bottom: 0;
`

export const CoachDescription = styled(`span`)`
  display: block;
  margin-top: 8px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  width: 215px;
  font-size: 14px;
`

export const CoachImg = styled(Img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #cd3c33;
  margin: 0 32px;
`

export const Coach = styled(`div`)`
  margin-bottom: 24px;
`
