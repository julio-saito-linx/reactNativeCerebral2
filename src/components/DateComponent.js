import React from 'react'
import {
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native'
import {connect} from 'cerebral/react'

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

const styles = StyleSheet.create({
  button: {
    marginTop: 40
  },
  date: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20
  }
})
