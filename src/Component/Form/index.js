import { connect } from 'react-redux'
import {setTitle} from '../../Redux/State/Todo/Todo'
import { componentDidMount } from 'react-functional-lifecycle'
import { compose } from 'ramda'
import Form from './Form'
import {submitForm} from "../../Redux/State/Todo/Todo";

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
  ...state.Todo,
})

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = dispatch => ({
  setTitle: compose(dispatch, setTitle),
  submitForm: compose(dispatch, submitForm),
})

// didMount :: Props -> *
const didMount = ({}) => {}

// container :: ReactComponent -> ReactComponent
const container = connect(mapStateToProps, mapDispatchToProps);

// component :: ReactComponent
const component = componentDidMount(didMount)(Form);

// Card :: ReactComponent
export default container(component);
