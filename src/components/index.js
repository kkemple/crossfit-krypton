import styled from '@emotion/styled'

export { default as ContentContainer } from './content-container'
export { default as Header } from './header'
export { default as Footer } from './footer'
export { default as Layout } from './layout'
export { default as Logo } from './logo'

export const SectionSubTitle = styled(`h4`)`
  color: #cd3c33;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`

export const SectionTitle = styled(`h3`)`
  text-align: center;
  margin-bottom: 10px;
`

export const SectionContent = styled(`div`)`
  text-align: center;
  padding: 0 16px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

export const SectionSpacer = styled(`div`)`
  width: 100%;
  padding: 32px 0;
`
