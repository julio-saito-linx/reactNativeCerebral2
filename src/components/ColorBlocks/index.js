import React from 'react'
import {
  View
} from 'react-native'
import {connect} from 'cerebral/react'
import styles from './styles'
import BlockButton from './BlockButton'

export default connect({
  blocks: 'blocks'
}, {
  buttonClicked: 'buttonClicked',
  buttonChangeTitleClicked: 'buttonChangeTitleClicked'
},
  function ColorBlocks (props) {
    return (
      <View style={styles.blocksContainer}>
        {Object.keys(props.blocks).map((key) => {
          return <BlockButton key={key} id={key} counter={props.blocks[key].counter} />
        }) }
      </View>
    )
  }
)
