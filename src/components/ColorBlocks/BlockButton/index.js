import React from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native'
import styles from './styles'

function getColor (counter) {
  switch (counter % 4) {
    case 0:
      return {backgroundColor: '#F5D9C3'}
    case 1:
      return {backgroundColor: '#D2ACB9'}
    case 2:
      return {backgroundColor: '#B4707F'}
    case 3:
      return {backgroundColor: '#75617C'}
    case 4:
      return {backgroundColor: '#412E34'}
    default:
      return {backgroundColor: 'white'}
  }
}

function getSize (gridSize) {
  const {width} = Dimensions.get('window')
  const totalSize = width - 40
  const blockSize = Math.floor((totalSize / gridSize) - (gridSize * 1.1))
  return {
    width: blockSize,
    height: blockSize
  }
}

export default function BlockButton (props) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        underlayColor='#444'
        onPress={() => {
          props.blockPressed({
            rowId: props.rowId,
            colId: props.colId
          })
        }}
        style={[styles.button, getColor(props.counter), getSize(props.gridSize)]}>
        <Text />
      </TouchableHighlight>
    </View>
  )
}
