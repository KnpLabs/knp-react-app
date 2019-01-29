import { connect } from 'react-redux'
import { generateDog } from '../../Redux/State/Dog'
import { componentDidMount } from 'react-functional-lifecycle'
import { compose } from 'ramda'
import Dog from './Dog'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
  ...state.Dog,
})

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = dispatch => ({
  generateRandomDog: compose(dispatch, generateDog),
})

// didMount :: Props -> *
const didMount = ({ generateRandomDog }) => generateRandomDog()

// container :: ReactComponent -> ReactComponent
const container = connect(mapStateToProps, mapDispatchToProps);

// component :: ReactComponent
const component = componentDidMount(didMount)(Dog);

// Dog :: ReactComponent
export default container(component);
