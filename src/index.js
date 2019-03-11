import { either } from 'crocks'
import { identity } from 'ramda'
import { start } from './Effect/App'
import './index.css'

either(
  error => { throw error },
  identity,
  start('root'),
)
