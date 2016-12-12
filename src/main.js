import React, { Component } from 'react'
import { Container } from 'cerebral/react'
import MainComponent from './components/MainComponent'
import controller from './controller'

export default class MainContainer extends Component {
  render () {
    return (
      <Container controller={controller}>
        <MainComponent />
      </Container>
    )
  }
}
