import { combineReducers } from 'redux'
import widgetReducer from './widgetReducer'
import menuReducer from './menuReducer'

export default combineReducers({
  widgetReducer,
  menuReducer
})