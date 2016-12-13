import {Controller} from 'cerebral'
import Devtools from 'cerebral/devtools'

const controller = Controller({
  devtools: Devtools({
    remoteDebugger: '192.168.0.5:8585'
  }),

  state: {
    blocks: {
      1: {
        1: {counter: 0},
        2: {counter: 0},
        3: {counter: 0},
        4: {counter: 0},
        5: {counter: 0},
        6: {counter: 0}
      },
      2: {
        1: {counter: 0},
        2: {counter: 0},
        3: {counter: 0},
        4: {counter: 0},
        5: {counter: 0},
        6: {counter: 0}
      },
      3: {
        1: {counter: 0},
        2: {counter: 0},
        3: {counter: 0},
        4: {counter: 0},
        5: {counter: 0},
        6: {counter: 0}
      },
      4: {
        1: {counter: 0},
        2: {counter: 0},
        3: {counter: 0},
        4: {counter: 0},
        5: {counter: 0},
        6: {counter: 0}
      },
      5: {
        1: {counter: 0},
        2: {counter: 0},
        3: {counter: 0},
        4: {counter: 0},
        5: {counter: 0},
        6: {counter: 0}
      }
    }
  },

  signals: {
    bootstrap: [
      ({state, input}) => {
        const rows = input.rows
        const cols = input.cols
        const blockRowsAndCols = new Array(rows).fill().reduce((rowsObj, _, i) => {
          rowsObj[i] = new Array(cols).fill().reduce((colsObj, _, j) => {
            colsObj[j] = {counter: 0}
            return colsObj
          }, {})
          return rowsObj
        }, {})
        state.set('blocks', blockRowsAndCols)
      }
    ],
    blockPressed: [
      ({state, input}) => {
        let counterPath = `blocks.${input.rowId}.${input.colId}.counter`
        state.set(counterPath, state.get(counterPath) + 1)
      }
    ]
  }
})

export default controller
