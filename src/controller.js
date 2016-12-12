import { Controller } from 'cerebral'
import Devtools from 'cerebral/devtools'
import {input, state, set} from 'cerebral/operators'

const controller = Controller({
  devtools: Devtools({
    remoteDebugger: '192.168.0.5:8585'
  }),
  state: {
    title: 'Initial Title',
    titleCounter: 1,
    currentDate: (new Date()).toLocaleTimeString()
  },
  signals: {
    buttonClicked: [
      set(state`currentDate`, input`newDate`)
    ],
    buttonChangeTitleClicked: [
      ({state}) => state.set('titleCounter', state.get('titleCounter') + 1),
      set(state`title`, input`newTitle`)
    ]
  }
})

export default controller
