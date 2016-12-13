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
    currentDate: (new Date()).toLocaleTimeString(),
    currentPage: 'page1',
    blocks: {
      1: {counter: 1},
      2: {counter: 1},
      3: {counter: 1},
      4: {counter: 1},
      5: {counter: 1},
      6: {counter: 1}
    }
  },

  signals: {
    buttonClicked: [
      set(state`currentDate`, input`newDate`)
    ],
    buttonChangeTitleClicked: [
      ({state}) => state.set('titleCounter', state.get('titleCounter') + 1),
      set(state`title`, input`newTitle`)
    ],

    // routing
    page1Routed: set(state`currentPage`, 'page1'),
    page2Routed: set(state`currentPage`, 'page2'),

    // blocks
    blockPressed: [
      ({state, input}) => {
        let counterPath = `blocks.${input.id}.counter`
        state.set(counterPath, state.get(counterPath) + 1)
      }
    ]
  }

})

export default controller
