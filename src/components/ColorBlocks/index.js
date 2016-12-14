import React from 'react'
import {
  View
} from 'react-native'
import styles from './styles'
import BlockButton from './BlockButton'
import {connect} from 'cerebral/react'

function createRows (props) {
  let result = []
  for (let rowId = 0; rowId < props.rows; rowId++) {
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
  for (let colId = 0; colId < props.cols; colId++) {
    result.push((
      <BlockButton
        key={colId}
        rowId={rowId}
        colId={colId}
        counter={props.blocks[rowId][colId].counter}
        gridSize={props.gridSize}
        blockPressed={props.blockPressed}
      />
    ))
  }
  return result
}

export default connect({
  blocks: 'blocks.**',
  gridSize: 'gridSize'
}, {
  blockPressed: 'blockPressed'
},
  function BlockButton (props) {
    return (
      <View style={styles.blocksRowsContainer}>
        {createRows(props)}
      </View>
    )
  })
