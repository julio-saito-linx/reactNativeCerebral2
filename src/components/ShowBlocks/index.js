import React from 'react'
import {
  View
} from 'react-native'
import styles from './styles'
import Block from './Block'
import {connect} from 'cerebral/react'

function createRows (props) {
  let result = []
  for (let rowId = 0; rowId < props.rows * 3; rowId++) {
    result.push((
      <View
        key={rowId}
        style={styles.blocksContainer}
      >
        {createColumns(rowId, props)}
      </View>
    ))
  }
  return result
}

function createColumns (rowId, props) {
  let result = []
  for (let colId = 0; colId < props.cols * 5; colId++) {
    result.push((
      <Block
        key={colId}
        counter={props.blocks[rowId % 6][colId % 6].counter}
      />
    ))
  }
  return result
}

export default connect({
  blocks: 'blocks.**'
}, {},
  (props) => {
    return (
      <View style={styles.blocksRowsContainer}>
        {createRows(props)}
      </View>
    )
  })
