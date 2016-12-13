import React from 'react'
import {
  View
  // NavigationExperimental,
  // ScrollView
} from 'react-native'
import ColorBlocks from '../ColorBlocks'
import styles from './styles'
import {connect} from 'cerebral/react'

export default connect({}, {
  bootstrap: 'bootstrap'
},
  (props) => {
    const ROWS = 7
    const COLS = 7

    props.bootstrap({rows: ROWS, cols: COLS})

    return (
      <View style={styles.container}>
        <ColorBlocks rows={ROWS} cols={COLS} />
      </View>
    )

  })
