import {
  StyleSheet
} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  buttons: {
    margin: 13,
    flexDirection: 'row'
  },
  button: {
    marginRight: 10
  },
  buttonWithSpace: {
    marginLeft: 20
  }
})
