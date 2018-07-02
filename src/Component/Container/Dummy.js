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
import { fetch, clean } from '../../Redux/Module/Dummy'
import Dummy from '../View/Dummy'

const mapStateToProps = state => ({
  toggled: state.dummy.toggler,
  payload: state.payload,
  isFetching: state.isFetching,
})

const mapDispatchToProps = dispatch => ({
  fetch: compose(dispatch, fetch),
  cleanState: compose(dispatch, clean),
})

const onMount = pipe(
  tap(compose(call, prop('fetch'))),
)

const onUnmount = pipe(
  tap(compose(call, prop('cleanState'))),
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(pipe(
  componentDidMount(onMount),
  componentWillUnmount(onUnmount),
)(Dummy))
