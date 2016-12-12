import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { Controller } from 'cerebral'
import { Container } from 'cerebral/react'
import Devtools from 'cerebral/devtools'
import {connect} from 'cerebral/react'
import {input, state, set} from 'cerebral/operators'

const controller = Controller({
  devtools: Devtools({
    remoteDebugger: '192.168.0.5:8585'
  }),
  state: {
    currentDate: (new Date()).toISOString()
  },
  signals: {
    buttonClicked: [
      set(state`currentDate`, input`newDate`)
    ]
  }
})


const Title = connect(
{
  currentDate: 'currentDate'
},
{
  buttonClicked: 'buttonClicked'
},
  function Title (props) {
    return (
      <View>
        <Text>
          {props.currentDate}
        </Text>
        <Button
          onPress={() => props.buttonClicked({
            newDate: (new Date()).toISOString()
          })}
          title="Get current date!"
          color="#841584"
          accessibilityLabel="Click on this button to change state"
        />
      </View>
    )
  }
)


export default class reactNativeCerebral2 extends Component {
  render() {
    return (
      <Container controller={controller}>
        <View style={styles.container}>
          <Title />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('reactNativeCerebral2', () => reactNativeCerebral2);
