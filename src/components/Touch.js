import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import onChangeProp from '../utils/onChangeProp'

const Touch = ({ onChange, ...props }) => (
  <State
    initial={{ isTouched: false }}
    onChange={onChangeProp(onChange, 'isTouched')}
  >
    {({ state, setState }) =>
      renderProps(props, {
        isTouched: state.isTouched,
        bind: {
          onTouchStart: () => setState({ isTouched: true }),
          onTouchEnd: () => setState({ isTouched: false }),
        },
      })
    }
  </State>
)

export default Touch
