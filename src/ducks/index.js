import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import app from './app'
import flows from './flows'
import posts from './posts'
import editPost from './editPost'

export default combineReducers({
  routing: routerReducer,
  app,
  flows,
  posts,
  editPost
})
