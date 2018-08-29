import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import main from './modules/index'
import celendar from './modules/celendar'

const rootReducer = combineReducers({
  main,
  celendar,
  form: formReducer
})

export default rootReducer
