import { createReducer } from 'redux-act'
import * as EditPostActions from '../actions/EditPostActions'

const initialState = {
  flow: '',
  title: '',
  content: ''
}

const reducer = createReducer({
  [EditPostActions.inputTitle]: (state, { title }) => ({...state, title}),
  [EditPostActions.submit]: (state, post) => ({...state, ...post})
}, initialState)

export default reducer
