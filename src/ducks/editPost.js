import { createAction, createReducer } from 'redux-act'

export const actions = {
  inputTitle: createAction('@@edit_post/INPUT_TITLE', title => ({ title })),
  submit: createAction('@@edit_post/SUBMIT', post => post),
}

const initialState = {
  flow: '',
  title: '',
  content: ''
}

const reducer = createReducer({
  [actions.inputTitle]: (state, { title }) => ({...state, title}),
  [actions.submit]: (state, post) => ({...state, ...post})
}, initialState)

export default reducer
