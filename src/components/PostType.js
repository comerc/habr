import React from 'react'
import { Link } from 'react-router'

const PostType = ({ author: { nick, name } }) => (
  <div className="post-type">
    <span className="post-type_nowrap">
      <span className="post-type__label post-type__label_author">Автор: </span>
      <Link to={`/users/${nick}/`} className="post-type__value post-type__value_author" title={name}>{`@${nick}`}</Link>
    </span>
  </div>
)

export default PostType
