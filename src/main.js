import React, { Component } from 'react'
import { Container } from 'cerebral/react'
import Main from './components/Main'
import controller from './controller'

export default class MainContainer extends Component {
  render () {
    return (
      <Container controller={controller}>
        <Main />
      </Container>
    )
  }
}
