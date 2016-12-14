import React from 'react'
import {
  View
  // NavigationExperimental,
  // ScrollView
  , Button
} from 'react-native'
import ColorBlocks from '../ColorBlocks'
import ShowBlocks from '../ShowBlocks'
import styles from './styles'
import {connect} from 'cerebral/react'

export default connect({
  gridSize: 'gridSize'
}, {
  bootstrap: 'bootstrap',
  leftButtonPressed: 'leftButtonPressed',
  rightButtonPressed: 'rightButtonPressed',
  upButtonPressed: 'upButtonPressed',
  downButtonPressed: 'downButtonPressed',
  gridSizePressed: 'gridSizePressed'
},
  function Main (props) {
    props.bootstrap()
    return (
      <View style={styles.container}>
        <ColorBlocks rows={props.gridSize} cols={props.gridSize} />

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button color='#777' title='◀' onPress={() => props.leftButtonPressed()} />
          </View>
          <View style={styles.button}>
            <Button color='#777' title='▶' onPress={() => props.rightButtonPressed()} />
          </View>
          <View style={styles.button}>
            <Button color='#777' title='▲' onPress={() => props.upButtonPressed()} />
          </View>
          <View style={styles.button}>
            <Button color='#777' title='▼' onPress={() => props.downButtonPressed()} />
          </View>
          <View style={styles.buttonGridSize}>
            <Button color='#777' title={`${props.gridSize.toString()} x ${props.gridSize.toString()}`} onPress={() => props.gridSizePressed()} />
          </View>
        </View>

        <ShowBlocks rows={props.gridSize} cols={props.gridSize} />
      </View>
    )
  })
