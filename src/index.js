import { start } from './Effect/App'
import './index.css'


start('root').either(
  error => { throw error },
  succ => succ
)
