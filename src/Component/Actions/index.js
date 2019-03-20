import { connect } from 'react-redux'
import {addCard} from '../../Redux/State/Actions/Actions'
import { componentDidMount } from 'react-functional-lifecycle'
import { compose } from 'ramda'
import Actions from './Actions'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
  ...state.Actions,
})

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = dispatch => ({
  addCard: compose(dispatch, addCard),
})

// didMount :: Props -> *
const didMount = ({}) => {}

// container :: ReactComponent -> ReactComponent
const container = connect(mapStateToProps, mapDispatchToProps);

// component :: ReactComponent
const component = componentDidMount(didMount)(Actions);

// Card :: ReactComponent
export default container(component);
