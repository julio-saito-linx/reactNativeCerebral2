import React from 'react'
import {
  Text,
  View,
  Button
  // NavigationExperimental,
  // ScrollView
} from 'react-native'
import {connect} from 'cerebral/react'
import ColorBlocks from '../ColorBlocks'
import ShowDate from '../ShowDate'
import styles from './styles'

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

        <ColorBlocks />

        <ShowDate />
      </View>
    )
  }
)

function getTitle ({titleCounter}) {
  const times = titleCounter > 1 ? 'times' : 'time'
  return `You have pressed ${titleCounter} ${times}`
}
