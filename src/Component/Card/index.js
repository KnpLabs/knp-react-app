import { connect } from 'react-redux'
import {addCard, setTitle} from '../../Redux/State/Card/Card'
import { componentDidMount } from 'react-functional-lifecycle'
import { compose } from 'ramda'
import Card from './Card'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
  ...state.Card,
})

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = dispatch => ({
  addCard: compose(dispatch, addCard),
  setTitle: compose(dispatch, setTitle),
})

// didMount :: Props -> *
const didMount = ({}) => {}

// container :: ReactComponent -> ReactComponent
const container = connect(mapStateToProps, mapDispatchToProps);

// component :: ReactComponent
const component = componentDidMount(didMount)(Card);

// Card :: ReactComponent
export default container(component);
