import React from 'react'
import styled from '@emotion/styled'

const Container = styled(`div`)`
  width: 100%;
  display: flex;
  ${'' /* padding-bottom: 64px; */}
`

const Copyright = styled(`span`)`
  font-size: 8px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin: auto;
`

export default () => (
  <Container>
    <Copyright>© Copyright 2018 CrossFit Krypton</Copyright>
  </Container>
)
