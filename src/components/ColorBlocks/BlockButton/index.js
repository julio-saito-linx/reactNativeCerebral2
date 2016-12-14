import React from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native'
import styles from './styles'

function getColor ({counter, colorsList, colorsListIndex}) {
  const listOfColors = colorsList[colorsListIndex]
  return {
    backgroundColor: listOfColors[counter % listOfColors.length]
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
        style={[styles.button, getColor(props), getSize(props.gridSize)]}>
        <Text />
      </TouchableHighlight>
    </View>
  )
}
