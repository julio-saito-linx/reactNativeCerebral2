import React from 'react'
import {
  View
  // NavigationExperimental,
  // ScrollView
} from 'react-native'
import ColorBlocks from '../ColorBlocks'
import ShowBlocks from '../ShowBlocks'
import styles from './styles'
import {connect} from 'cerebral/react'

export default connect({}, {
  bootstrap: 'bootstrap'
},
  (props) => {
    const ROWS = 6
    const COLS = 6

    props.bootstrap({rows: ROWS, cols: COLS})

    return (
      <View style={styles.container}>
        <ColorBlocks rows={ROWS} cols={COLS} />
        <ShowBlocks rows={ROWS} cols={COLS} />
      </View>
    )

  })
