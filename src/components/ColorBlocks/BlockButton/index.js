import React from 'react'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import {connect} from 'cerebral/react'
import styles from './styles'

function getColor (counter) {
  switch (counter % 3) {
    case 0:
      return {backgroundColor: '#444'}
    case 1:
      return {backgroundColor: '#555'}
    case 2:
      return {backgroundColor: '#666'}
    default:
      return {backgroundColor: '#777'}
  }
}

export default connect({
}, {
  blockPressed: 'blockPressed'
},
  function ColorBlocks (props) {
    return (
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          underlayColor='#333'
          onPress={() => {
            props.blockPressed({id: props.id})
          }}
          style={[styles.button, getColor(props.counter)]}>
          <Text />
        </TouchableHighlight>
      </View>
    )
  }
)
