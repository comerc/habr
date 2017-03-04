import { createAction, createReducer } from 'redux-act'

export const inputTitle = createAction('@@edit_post/INPUT_TITLE', title => ({ title }))
export const submit = createAction('@@edit_post/SUBMIT', post => post)

const initialState = {
  flow: '',
  title: '',
  content: ''
}

const reducer = createReducer({
  [inputTitle]: (state, { title }) => ({...state, title}),
  [submit]: (state, post) => ({...state, ...post})
}, initialState)

export default reducer
