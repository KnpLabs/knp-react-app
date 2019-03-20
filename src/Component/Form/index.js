import { connect } from 'react-redux'
import {setTitle} from '../../Redux/State/Form/Form'
import { componentDidMount } from 'react-functional-lifecycle'
import { compose } from 'ramda'
import Form from './Form'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
  ...state.Form,
})

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = dispatch => ({
  setTitle: compose(dispatch, setTitle),
})

// didMount :: Props -> *
const didMount = ({}) => {}

// container :: ReactComponent -> ReactComponent
const container = connect(mapStateToProps, mapDispatchToProps);

// component :: ReactComponent
const component = componentDidMount(didMount)(Form);

// Card :: ReactComponent
export default container(component);
