import React from 'react'
import {
  View,
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
  const blockSize = Math.floor((totalSize / gridSize) / 6)
  return {
    width: blockSize,
    height: blockSize
  }
}

export default function Block (props) {
  return (
    <View style={styles.buttonContainer}>
      <View style={[styles.button, getColor(props), getSize(props.gridSize)]} />
    </View>
  )
}
