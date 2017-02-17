import React from 'react'
import PostHeader from './PostHeader'
import PostInfoPanel from './PostInfoPanel'

const PostTeaser = ({ id, published, flow, hubs, title, content, author, viewsCount, favoritesCount }) => (
  <div className="post post_teaser shortcuts_item" id={`post_${id}`}>
    <PostHeader isTeaser={true} {...{ id, published, flow, hubs, title }} />
    <div className="post__body post__body_crop ">
      <div className="content html_format">{content}</div>
      <div className="buttons" style={ { padding: '20px 0 0' } }>
        {/* TODO изменяемое название для habracut */}
        <a className="button" href={`/#/post/${id}/#habracut`}>Читать дальше →</a>
      </div>
    </div>
    <div className="post__footer">
      <PostInfoPanel isTeaser={true} {...{ id, author, viewsCount, favoritesCount }} />
    </div>
  </div>
)

export default PostTeaser
