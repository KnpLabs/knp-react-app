import { connect } from 'react-redux'
import { componentDidMount } from 'react-functional-lifecycle'
import Card from './Card'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
  ...state.Todo,
})


// didMount :: Props -> *
const didMount = ({}) => {}

// container :: ReactComponent -> ReactComponent
const container = connect(mapStateToProps);

// component :: ReactComponent
const component = componentDidMount(didMount)(Card);

// Card :: ReactComponent
export default container(component);
