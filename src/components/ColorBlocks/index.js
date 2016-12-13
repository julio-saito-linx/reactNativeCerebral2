import React from 'react'
import {
  View
} from 'react-native'
import styles from './styles'
import BlockButton from './BlockButton'

function createRows ({rows, cols}) {
  let result = []
  for (let rowId = 0; rowId < rows; rowId++) {
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
  for (let colId = 0; colId < cols; colId++) {
    result.push((
      <BlockButton
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
