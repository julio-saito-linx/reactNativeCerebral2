import React from 'react'
import {
  View
} from 'react-native'
import styles from './styles'
import Block from './Block'

function createRows ({rows, cols}) {
  let result = []
  for (let rowId = 0; rowId < rows * 3; rowId++) {
    result.push((
      <View
        key={rowId}
        style={styles.blocksContainer}
      >
        {createColumns(rowId, cols)}
      </View>
    ))
  }
  return result
}

function createColumns (rowId, cols) {
  let result = []
  for (let colId = 0; colId < cols * 3; colId++) {
    result.push((
      <Block
        key={colId}
        rowId={rowId}
        colId={colId}
        counter={0}
      />
    ))
  }
  return result
}

export default (props) => (
  <View style={styles.blocksRowsContainer}>
    {createRows(props)}
  </View>
)
