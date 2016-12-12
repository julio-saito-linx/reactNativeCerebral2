import React from 'react'
import {
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native'
import {connect} from 'cerebral/react'
import DateComponent from './DateComponent'

export default connect({
  title: 'title',
  titleCounter: 'titleCounter'
}, {
  buttonChangeTitleClicked: 'buttonChangeTitleClicked'
},
  function MainComponent (props) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {props.title}
        </Text>
        <Button
          onPress={() => props.buttonChangeTitleClicked({
            newTitle: getTitle(props)
          })}
          title='Press "Change title" button'
          color='#841584'
          accessibilityLabel='Click on this button to change state'
        />

        <DateComponent />
      </View>
    )
  }
)

function getTitle({title, titleCounter}) {
  const times = titleCounter > 1 ? 'times' : 'time'
  return `You have pressed ${titleCounter} ${times}`
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10
  }
})
