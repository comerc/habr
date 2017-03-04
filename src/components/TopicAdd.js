import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as EditPostActions from '../ducks/editPost'

const TITLE_MAX_LENGTH = 120

const TopicAdd = ({ post: { title }, inputTitle, submit }) => {

  let textareaContent = null

  const doSubmit = (event) => {
    event.preventDefault()
    submit({ title, content: textareaContent.value })
  }

  const doInputTitle = (event) => {
    inputTitle(event.target.value)
  }

  return (
    <div>
      <form onSubmit={doSubmit}>
        <div>
          <label><div>Заголовок: {TITLE_MAX_LENGTH - title.length}</div>
            <input onInput={doInputTitle} name="title" defaultValue={title} maxLength={TITLE_MAX_LENGTH} />
          </label>
        </div>
        <div>
          <label><div>Текст:</div>
            <textarea ref={ ref => { textareaContent = ref } } name="content"></textarea>
          </label>
        </div>
        <button>Отправить</button>
      </form>

    </div>
  )
}

const mapStateToProps = (state) => ({
  post: state.editPost
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(EditPostActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicAdd)
