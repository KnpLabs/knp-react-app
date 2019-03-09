import { start } from './Effect/App'


start('root').either(
  error => { throw error },
  succ => succ
)
