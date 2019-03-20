import { connect } from 'react-redux'
import { componentDidMount } from 'react-functional-lifecycle'
import Todo from './Todo'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
  ...state.Todo, isCreating: state.Actions.isCreating
})

// didMount :: Props -> *
const didMount = ({}) => {}

// container :: ReactComponent -> ReactComponent
const container = connect(mapStateToProps);

// component :: ReactComponent
const component = componentDidMount(didMount)(Todo);

// Card :: ReactComponent
export default container(component);
