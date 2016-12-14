import React from 'react'
import {
  View
  // NavigationExperimental,
  // ScrollView
  , Button
} from 'react-native'
import ColorBlocks from '../ColorBlocks'
import ShowBlocks from '../ShowBlocks'
import styles from './styles'
import {connect} from 'cerebral/react'

export default connect({
  gridSize: 'gridSize',
  colorsListIndex: 'colorsListIndex',
  loaded: 'loaded'
}, {
  bootstrap: 'bootstrap',
  leftButtonPressed: 'leftButtonPressed',
  rightButtonPressed: 'rightButtonPressed',
  upButtonPressed: 'upButtonPressed',
  downButtonPressed: 'downButtonPressed',
  gridSizePressed: 'gridSizePressed',
  changeColorsPressed: 'changeColorsPressed'
},
  class Main extends React.Component {
    componentDidMount () {
      this.props.bootstrap()
    }

    render () {
      if (!this.props.loaded) {
        return null
      }

      return (
        <View style={styles.container}>
          <ColorBlocks rows={this.props.gridSize} cols={this.props.gridSize} />

          <View style={styles.buttons}>
            <View style={styles.button}>
              <Button color='#777' title='◀' onPress={() => this.props.leftButtonPressed()} />
            </View>
            <View style={styles.button}>
              <Button color='#777' title='▶' onPress={() => this.props.rightButtonPressed()} />
            </View>
            <View style={styles.button}>
              <Button color='#777' title='▲' onPress={() => this.props.upButtonPressed()} />
            </View>
            <View style={styles.button}>
              <Button color='#777' title='▼' onPress={() => this.props.downButtonPressed()} />
            </View>
            <View style={styles.buttonWithSpace}>
              <Button color='#777' title={`${this.props.gridSize.toString()} x ${this.props.gridSize.toString()}`}
                onPress={() => this.props.gridSizePressed()} />
            </View>
            <View style={styles.buttonWithSpace}>
              <Button color='#777' title={this.props.colorsListIndex.toString()}
                onPress={() => this.props.changeColorsPressed()} />
            </View>
          </View>

          <ShowBlocks rows={this.props.gridSize} cols={this.props.gridSize} />
        </View>
      )
    }
  }
)
