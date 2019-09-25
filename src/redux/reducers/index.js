import { combineReducers } from 'redux'
import user from './userReducer'
import filter from './filterReducer'

// Wrap all reducers in a container
export default combineReducers({
  user,
  filter
})
