import { createAction } from 'redux-act'

export const inputTitle = createAction('@@edit_post/INPUT_TITLE', title => ({ title }))
export const submit = createAction('@@edit_post/SUBMIT', post => post)
