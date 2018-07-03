import { connect } from 'react-redux'
import {
  compose,
  pipe,
  call,
  prop,
  tap,
} from 'ramda'
import {
  componentDidMount,
  componentWillUnmount,
} from 'react-functional-lifecycle'
import { on, off } from '../../Redux/Module/Dummy'
import Dummy from '../View/Dummy'

const mapStateToProps = state => ({
  dummy: state.dummy,
})

const mapDispatchToProps = dispatch => ({
  on: compose(dispatch, on),
  off: compose(dispatch, off),
})

const onMount = pipe(
  tap(compose(call, prop('on'))),
)

const onUnmount = pipe(
  tap(compose(call, prop('off'))),
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(pipe(
  componentDidMount(onMount),
  componentWillUnmount(onUnmount),
)(Dummy))
