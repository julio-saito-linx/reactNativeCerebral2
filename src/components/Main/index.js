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

export default connect({}, {
  bootstrap: 'bootstrap',
  leftButtonPressed: 'leftButtonPressed',
  rightButtonPressed: 'rightButtonPressed',
  upButtonPressed: 'upButtonPressed',
  downButtonPressed: 'downButtonPressed'
},
  (props) => {
    const ROWS = 6
    const COLS = 6
    props.bootstrap({rows: ROWS, cols: COLS})
    return (
      <View style={styles.container}>
        <ColorBlocks rows={ROWS} cols={COLS} />

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title='left' onPress={() => props.leftButtonPressed()} />
          </View>
          <View style={styles.button}>
            <Button title='rigth' onPress={() => props.rightButtonPressed()} />
          </View>
          <View style={styles.button}>
            <Button title='up' onPress={() => props.upButtonPressed()} />
          </View>
          <View style={styles.button}>
            <Button title='down' onPress={() => props.downButtonPressed()} />
          </View>
        </View>

        <ShowBlocks rows={ROWS} cols={COLS} />
      </View>
    )
  })
