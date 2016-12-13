import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import {connect} from 'cerebral/react'
import styles from './styles'

export default connect({
  currentDate: 'currentDate'
}, {
  buttonClicked: 'buttonClicked',
  buttonChangeTitleClicked: 'buttonChangeTitleClicked'
},
  function DateComponent (props) {
    return (
      <View>

        <View style={styles.button}>
          <Button
            onPress={() => props.buttonClicked({
              newDate: (new Date()).toLocaleTimeString()
            })}
            title='What time is it?'
            color='#841584'
            accessibilityLabel='Click on this button to change state'
          />
        </View>

        <Text style={styles.date}>
          {props.currentDate}
        </Text>

      </View>
    )
  }
)
