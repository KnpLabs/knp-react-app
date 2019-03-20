import { connect } from 'react-redux'
import { componentDidMount } from 'react-functional-lifecycle'
import {openRemoveConfirmation} from '../../Redux/State/Todo/Todo'
import { compose } from 'ramda'
import Card from './Card'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
  ...state.Todo,
})


// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = dispatch => ({
  openRemoveConfirmation: compose(dispatch, openRemoveConfirmation),
})

// didMount :: Props -> *
const didMount = ({}) => {}

// container :: ReactComponent -> ReactComponent
const container = connect(mapStateToProps, mapDispatchToProps);


// component :: ReactComponent
const component = componentDidMount(didMount)(Card);

// Card :: ReactComponent
export default container(component);
